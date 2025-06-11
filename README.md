### ReactNet Application

Build React app with a .NET backend

### Creating app
    
    1. $ dotnet new react -o ReactNet
    (if No templates or subcommands found matching: 'react'.)
    $ dotnet new install Microsoft.DotNet.Web.Spa.ProjectTemplates

    2. $ dotnet run
    https://localhost:5001/

### Swagger Configuration
    1. https://localhost:5001/swagger/index.html

### React Vite Configuration
    Option 1: Do configuration in .csproj file
        1. // spa.UseReactDevelopmentServer(npmScript: "dev");
            spa.UseProxyToSpaDevelopmentServer("http://localhost:5173"); // Vite's default dev port

        2. 
        <Target Name="StartVite" BeforeTargets="Build" Condition="'$(Configuration)' == 'Debug'">
            <Exec WorkingDirectory="$(SpaRoot)" Command="nohup npm run dev &amp;> vite-dev.log &amp;"/>
        </Target>

        3. Run $ dotnet run // to start both .Net server and Vite app
    
    Option 2: Node configuration to root
        1. $ echo "" > package.json
            {
                "scripts": {
                    "start": "concurrently \"dotnet run\" \"npm --prefix ClientApp run dev\""
                },
            }
        2. $ yarn add -D concurrently

        3. $ yarn start 

        4. Starting app on browser
            $ https://localhost:5001/ (.Net + React)
            $ http://localhost:5173/ (React only)

### Kill Vite port
    $ lsof -i :5173
    $ kill -9 <PID>

### .NET Linting and Formatting
    NET has a robust ecosystem for linting and formatting tools
    1. Built-in Roslyn Analyzers and .NET Analyzers (For .NET 5.0+ projects, they are enabled by default.)
    2. Create .editorconfig to customize linting rules of the project
    3. Run formatting
        $ dotnet format

### .NET preconfig
    $ dotnet new tool-manifest
    $ dotnet tool install Husky
    $ dotnet husky install 
    $ dotnet husky add pre-commit

### .NET format commands
    1. Check dotnet format version
        $ dotnet format --version
    2. To update
        $ dotnet tool update -g dotnet-format
    3. Test the dotnet format command directly
        $ dotnet format "ReactNet.csproj" --verify-no-changes --include "ReactNet/Program.cs"
