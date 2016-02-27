using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyPhotoGalleryApp.Entities;
using MyPhotoGalleryApp.Infrastructure.Repositories.Abstract;

namespace MyPhotoGalleryApp.Infrastructure.Repositories
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
