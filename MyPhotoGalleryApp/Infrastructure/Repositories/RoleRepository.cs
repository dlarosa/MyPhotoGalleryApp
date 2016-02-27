using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyPhotoGalleryApp.Entities;
using MyPhotoGalleryApp.Infrastructure.Repositories.Abstract;

namespace MyPhotoGalleryApp.Infrastructure.Repositories
{
    public class RoleRepository : EntityBaseRepository<Role>, IRoleRepository
    {
        public RoleRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
