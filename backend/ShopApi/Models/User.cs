using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShopApi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        [Column(TypeName="nvarchar(25)")]
        public string Name { get; set; } = "";

        [Column(TypeName="nvarchar(30)")]
        public string Email { get; set; } = "";

        [Column(TypeName="nvarchar(20)")]
        public string Password { get; set; } = "";
    }
}