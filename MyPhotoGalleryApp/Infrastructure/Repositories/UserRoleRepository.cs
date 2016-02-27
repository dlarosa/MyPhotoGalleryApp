using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyPhotoGalleryApp.Entities;
using MyPhotoGalleryApp.Infrastructure.Repositories.Abstract;

namespace MyPhotoGalleryApp.Infrastructure.Repositories
{
    public class UserRoleRepository : EntityBaseRepository<UserRole>, IUserRoleRepository
    {
        public UserRoleRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
