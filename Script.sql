
DECLARE @dbname nvarchar(128)
DECLARE @tblname nvarchar(128)
SET @dbname = N'Fleet'

IF (EXISTS (SELECT name 
FROM master.dbo.sysdatabases 
WHERE ('[' + name + ']' = @dbname 
OR name = @dbname)))
begin 
PRINT 'db exists'

 IF (EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_NAME = 'Vehicle'))
BEGIN
   print 'Table already Created'
END


else 
begin
CREATE TABLE [dbo].[Vehicle](
	[VehicleID] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[RegNo] [varchar](50) NULL,
	[Make] [varchar](50) NULL,
	[Model] [varchar](50) NULL,
	[Color] [varchar](50) NULL,
	[EngineNo] [varchar](50) NULL,
	[ChasisNo] [varchar](50) NULL,
	[DateOfPurchase] [varchar](50) NULL,
	[Active] [bit] NULL)
	
	print 'Table Created successfully'
end



end


else
begin
USE master  
CREATE DATABASE fleet;

CREATE TABLE [dbo].[Vehicle](
	[VehicleID] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[RegNo] [varchar](50) NULL,
	[Make] [varchar](50) NULL,
	[Model] [varchar](50) NULL,
	[Color] [varchar](50) NULL,
	[EngineNo] [varchar](50) NULL,
	[ChasisNo] [varchar](50) NULL,
	[DateOfPurchase] [varchar](50) NULL,
	[Active] [bit] NULL)

print 'not found but its created'
end