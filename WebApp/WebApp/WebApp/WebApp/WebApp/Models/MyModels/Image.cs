using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    [Table("tblImageInfo")]
    public class Image
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ImageName { get; set; }
        public virtual PersonInfo Author {get;set;}
        public DateTime DateCreate { get; set; }
        [MaxLength(500, ErrorMessage = "Max length or description is 500 symvols")]
        public string Description { get; set; }
        public virtual Like Likes { get; set; }
    }
}