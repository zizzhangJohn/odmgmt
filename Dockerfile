# build frontend separately
FROM node:16-alpine AS node-builder
WORKDIR /app
COPY "Frontend/package.json" .
RUN npm install

# vite will output the build file to /app/dist
COPY "Frontend/" .
RUN npm run build


FROM mcr.microsoft.com/dotnet/sdk:7.0 AS dotnet-builder
WORKDIR /app

# copy .csproj and restore as distinct layers
COPY "Backend/OrderManagementBackend.sln" "Backend/OrderManagementBackend.sln"
COPY "Backend/API/API.csproj" "Backend/API/API.csproj"
COPY "Backend/Core/Core.csproj" "Backend/Core/Core.csproj"
COPY "Backend/Infrastructure/Infrastructure.csproj" "Backend/Infrastructure/Infrastructure.csproj"

RUN dotnet restore "Backend/OrderManagementBackend.sln"

COPY . .
# copy static build html to wwwroot
COPY --from=node-builder "/app/dist" "./Backend/API/wwwroot"

RUN dotnet publish "Backend/OrderManagementBackend.sln" -c Release -o out

# build a runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
COPY --from=dotnet-builder /app/out .
ENTRYPOINT [ "dotnet", "API.dll" ]