using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    [Table("tblPersonInfo")]
    public class PersonInfo
    {
        [Key, ForeignKey("User")]
        public string Id { get; set; }
        [Required, StringLength(50)]
        public string FirstName { get; set; }
        [Required, StringLength(70)]
        public string SecondName { get; set; }
        [Phone]
        public string Phone { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}