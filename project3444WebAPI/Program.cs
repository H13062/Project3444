using project3444.Core.Contract.Repository;
using project3444.Core.Contract.Service;
using project3444.Infrastructure.Data;
using project3444.Infrastructure.Repository;
using project3444.Infrastructure.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddSqlServer<ProjectDbContext>(builder.Configuration.GetConnectionString("OnlineProject"));

//dependency injection for repository
builder.Services.AddScoped<IUserRepositoryAsync,UserRepositoryAsync>();
builder.Services.AddScoped<ICommentRepositoryAsync, CommentRepositoryAsync>();
builder.Services.AddScoped<IOrderRepositoryAsync, OrderRepositoryAsync>();
builder.Services.AddScoped<IDishRepositoryAsync, DishRepositoryAsync>();

//dependency injection for services
builder.Services.AddScoped<IUserServiceAsync, UserServiceAsync>();
builder.Services.AddScoped<ICommentServiceAsync, CommentServiceAsync>();
builder.Services.AddScoped<IOrderServiceAsync, OrderServiceAsync>();
builder.Services.AddScoped<IDishServiceAsync, DishServiceAsync>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
