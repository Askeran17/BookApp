// BookController.cs
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class BookController : ControllerBase
{
    private static List<Book> Books = new List<Book>();

    [HttpGet]
    public ActionResult<IEnumerable<Book>> GetBooks()
    {
        return Ok(Books);
    }

    [HttpPost]
    public ActionResult<Book> AddBook(Book book)
    {
        Books.Add(book);
        return Ok(book);
    }

    [HttpPut("{id}")]
    public ActionResult<Book> UpdateBook(int id, Book book)
    {
        var existingBook = Books.FirstOrDefault(b => b.Id == id);
        if (existingBook == null) return NotFound();
        existingBook.Title = book.Title;
        existingBook.Author = book.Author;
        existingBook.PublishDate = book.PublishDate;
        return Ok(existingBook);
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteBook(int id)
    {
        var book = Books.FirstOrDefault(b => b.Id == id);
        if (book == null) return NotFound();
        Books.Remove(book);
        return NoContent();
    }
}
