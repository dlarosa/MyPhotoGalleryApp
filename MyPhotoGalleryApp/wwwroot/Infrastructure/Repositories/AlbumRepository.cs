using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyPhotoGalleryApp.wwwroot.Entities;
using MyPhotoGalleryApp.wwwroot.Infrastructure.Repositories.Abstract;

namespace MyPhotoGalleryApp.wwwroot.Infrastructure.Repositories
{
    public class AlbumRepository : EntityBaseRepository<Album>, IAlbumRepository
    {
        public AlbumRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
