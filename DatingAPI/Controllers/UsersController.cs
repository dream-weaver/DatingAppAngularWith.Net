using DatingAPI.Data;
using DatingAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingAPI.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class UsersController : ControllerBase
	{
		private readonly DataContext _dbContext;
		public UsersController(DataContext dataContext)
		{
			_dbContext = dataContext;
		}
		//api/users
		[HttpGet]
		public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
		{
			return await _dbContext.Users.ToListAsync();
		}
		//api/users/1
		[HttpGet("{id}")]
		public async Task<ActionResult<AppUser>> GetUsersById(int id)
		{
			return await _dbContext.Users.FindAsync(id);
		}
	}
}
