using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using MyPhotoGalleryApp.Infrastructure;

namespace MyPhotoGalleryApp.Migrations
{
    [DbContext(typeof(PhotoGalleryContext))]
    [Migration("20160227133529_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.Album", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateCreated");

                    b.Property<string>("Description")
                        .HasAnnotation("MaxLength", 500);

                    b.Property<string>("Title")
                        .HasAnnotation("MaxLength", 100);

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.Error", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateCreated");

                    b.Property<string>("Message");

                    b.Property<string>("StackTrace");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AlbumId");

                    b.Property<DateTime>("DateUploaded");

                    b.Property<string>("Title")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<string>("Uri");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 50);

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateCreated");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("HashedPassword")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("IsLocked");

                    b.Property<string>("Salt")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.UserRole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("RoleId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.Photo", b =>
                {
                    b.HasOne("MyPhotoGalleryApp.Entities.Album")
                        .WithMany()
                        .HasForeignKey("AlbumId");
                });

            modelBuilder.Entity("MyPhotoGalleryApp.Entities.UserRole", b =>
                {
                    b.HasOne("MyPhotoGalleryApp.Entities.Role")
                        .WithMany()
                        .HasForeignKey("RoleId");

                    b.HasOne("MyPhotoGalleryApp.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });
        }
    }
}
