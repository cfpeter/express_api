USE [teamM]
GO
 
/****** Object:  Table [Customer].[Person]    Script Date: 7/23/2019 7:17:59 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Customer].[Person](
	[PersonID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](100) NOT NULL,
	[LastName] [varchar](100) NOT NULL,
	[DOB] [varchar](50) NULL,
	[Gender] [varchar](50) NULL,
	[Email] [varchar](150) NOT NULL,
	[CellPhone] [varchar](15) NULL,
	[OtherPhone] [varchar](15) NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[UpdatedBy] [varchar](150) NOT NULL,
	[UpdatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
(
	[PersonID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


