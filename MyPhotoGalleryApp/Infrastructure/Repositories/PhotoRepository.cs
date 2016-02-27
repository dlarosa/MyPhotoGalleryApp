using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyPhotoGalleryApp.Entities;
using MyPhotoGalleryApp.Infrastructure.Repositories.Abstract;

namespace MyPhotoGalleryApp.Infrastructure.Repositories
{
    public class PhotoRepository : EntityBaseRepository<Photo>, IPhotoRepository
    {
        public PhotoRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
