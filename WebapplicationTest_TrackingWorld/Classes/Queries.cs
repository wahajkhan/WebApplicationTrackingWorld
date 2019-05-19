using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebapplicationTest_TrackingWorld.Classes
{
    public class Queries
    {
        public string dbCheck_Query()
        {
            return @"DECLARE @dbname nvarchar(128)
DECLARE @tblname nvarchar(128)
SET @dbname = N'Fleet'

IF (EXISTS (SELECT name 
FROM master.dbo.sysdatabases 
WHERE ('[' + name + ']' = @dbname 
OR name = @dbname)))
begin 
select 'db exisit' as msg;
end
else
begin
use master;
CREATE DATABASE fleet;

select 'db created successfully' as msg;
end
";
        }

        public string tblCheckAndCreate_Query()
        {
            return @"IF (NOT EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_NAME = 'Vehicle'))
				 begin
	CREATE TABLE [dbo].[Vehicle](
	[VehicleID] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[RegNo] [varchar](500) NULL,
	[Make] [varchar](500) NULL,
	[Model] [varchar](500) NULL,
	[Color] [varchar](500) NULL,
	[EngineNo] [varchar](500) NULL,
	[ChasisNo] [varchar](500) NULL,
	[DateOfPurchase] [varchar](500) NULL,
	[Active] [bit] NULL)
				 end";
        }

    }
}