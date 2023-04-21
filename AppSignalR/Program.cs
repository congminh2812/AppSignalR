var builder = WebApplication.CreateBuilder(args);

// builder.Host.ConfigureLogging((logging) =>{
//         logging.AddFilter("Microsoft.AspNetCore.SignalR", LogLevel.Trace);
//         logging.AddFilter("Microsoft.AspNetCore.Http.Connections", LogLevel.Trace);
//     });

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSignalR();
// builder.Services.AddSingleton<IVoteManager, VoteManager>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();


 app.MapHub<ViewHub>("/hubs/view");
// app.MapHub<StringHub>("/hubs/string");
// app.MapHub<ColorHub>("/hubs/color");
//app.MapHub<VoteHub>("/hubs/vote");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
