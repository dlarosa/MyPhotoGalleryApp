using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNet.Mvc;
using MyPhotoGalleryApp.Entities;
using MyPhotoGalleryApp.Infrastructure.Repositories.Abstract;
using MyPhotoGalleryApp.ViewModels;
using System.Linq;

[Route("api/[controller]")]
public class PhotosController : Controller
{
    IPhotoRepository _photoRepository;
    ILoggingRepository _loggingRepository;
    public PhotosController(IPhotoRepository photoRepository, ILoggingRepository loggingRepository)
    {
        _photoRepository = photoRepository;
        _loggingRepository = loggingRepository;
    }

    [HttpGet("{page:int=0}/{pageSize=12}")]
    public PaginationSet<PhotoViewModel> Get(int? page, int? pageSize)
    {
        PaginationSet<PhotoViewModel> pagedSet = null;

        try
        {
            int currentPage = page.Value;
            int currentPageSize = pageSize.Value;

            List<Photo> _photos = null;
            int _totalPhotos = new int();


            _photos = _photoRepository
                .AllIncluding(p => p.Album)
                .OrderBy(p => p.Id)
                .Skip(currentPage * currentPageSize)
                .Take(currentPageSize)
                .ToList();

            _totalPhotos = _photoRepository.GetAll().Count();

            IEnumerable<PhotoViewModel> _photosVM = Mapper.Map<IEnumerable<Photo>, IEnumerable<PhotoViewModel>>(_photos);

            pagedSet = new PaginationSet<PhotoViewModel>()
            {
                Page = currentPage,
                TotalCount = _totalPhotos,
                TotalPages = (int)Math.Ceiling((decimal)_totalPhotos / currentPageSize),
                Items = _photosVM
            };
        }
        catch (Exception ex)
        {
            _loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
            _loggingRepository.Commit();
        }

        return pagedSet;
    }
}