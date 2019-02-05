using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    [Table("tblImageLikes")]
    public class Like
    {
        [Key, ForeignKey("Like")]
        public int Id { get; set; }
        public virtual List<PersonInfo> Persons { get; set; }
    }
}