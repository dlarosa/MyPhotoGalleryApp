﻿using AutoMapper;
using MyPhotoGalleryApp.Entities;
using MyPhotoGalleryApp.ViewModels;
using System.Linq;

public class DomainToViewModelMappingProfile : Profile
{
    protected override void Configure()
    {
        Mapper.CreateMap<Photo, PhotoViewModel>()
           .ForMember(vm => vm.Uri, map => map.MapFrom(p => "/images/" + p.Uri));

        Mapper.CreateMap<Album, AlbumViewModel>()
            .ForMember(vm => vm.TotalPhotos, map => map.MapFrom(a => a.Photos.Count))
            .ForMember(vm => vm.Thumbnail, map =>
                map.MapFrom(a => (a.Photos != null && a.Photos.Count > 0) ?
                "/images/" + a.Photos.First().Uri :
                "/images/thumbnail-default.png"));
    }
}