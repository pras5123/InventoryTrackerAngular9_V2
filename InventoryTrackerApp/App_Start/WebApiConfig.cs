using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace InventoryTrackerApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //"http://localhost:27569"
            config.EnableCors(new EnableCorsAttribute(origins:"*", headers:"*", methods:"*"));
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );



            //config.Routes.MapHttpRoute(name: "AddProduct",
            //                            "/{controller}/AddProduct",
            //                            defaults: new { controller = "Inventory", action = "AddProduct" },
            //                            constraints: null
            //                            );
        }
    }
}
