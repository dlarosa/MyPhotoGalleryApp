using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyPhotoGalleryApp.wwwroot.Entities;
using MyPhotoGalleryApp.wwwroot.Infrastructure.Repositories.Abstract;

namespace MyPhotoGalleryApp.wwwroot.Infrastructure.Repositories
{
    public class UserRoleRepository : EntityBaseRepository<UserRole>, IUserRoleRepository
    {
        public UserRoleRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
