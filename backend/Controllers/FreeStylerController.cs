using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/FreeStyler")]
    public class FreeStylerController : ControllerBase
    {
        private readonly FreestyleDbContext _context;

        public FreeStylerController (FreestyleDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FreeStyler>>> getFreeStylers()
        {
            return await _context.FreeStyler.Include(n => n.nacionality).ToListAsync();

        }

        [HttpGet("/{id}")]
        public async Task<ActionResult<FreeStyler>> getFreestyler(int id)
        {
            var freestyler = await _context.FreeStyler.FindAsync(id);

            if (freestyler == null)
            {
                return NotFound();
            } 

            return freestyler;
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> putFrestyler(int id, FreeStyler freeStyler)
        {
           freeStyler.id = id;

            _context.Entry(freeStyler).State = EntityState.Modified;

            try
            {
                 await _context.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                return BadRequest();
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<FreeStyler>> postFreestyler( FreeStyler freeStyler)
        {
            _context.FreeStyler.Add(freeStyler);

            await _context.SaveChangesAsync();

            return CreatedAtAction("getFreestyler", new {id = freeStyler.id}, freeStyler);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<FreeStyler>> deleteFreestyler(int id)
        {
            var freestyler = await _context.FreeStyler.FindAsync(id);

            if(freestyler == null)
            {
                return NotFound();
            }

            _context.FreeStyler.Remove(freestyler);
            await _context.SaveChangesAsync();

            return freestyler;
        }



    }
}