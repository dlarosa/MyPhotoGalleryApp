using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyPhotoGalleryApp.wwwroot.Entities;
using MyPhotoGalleryApp.wwwroot.Infrastructure.Repositories.Abstract;

namespace MyPhotoGalleryApp.wwwroot.Infrastructure.Repositories
{
    public class LoggingRepository : EntityBaseRepository<Error>, ILoggingRepository
    {
        public LoggingRepository(PhotoGalleryContext context)
            : base(context)
        { }

        public override void Commit()
        {
            try
            {
                base.Commit();
            }
            catch { }   // we don't want an excpetion when logging errors

        }
    }
}
