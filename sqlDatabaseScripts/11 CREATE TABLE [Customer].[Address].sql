USE [teamM]
GO

/****** Object:  Table [Customer].[Address]    Script Date: 8/8/2019 2:28:23 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Customer].[Address](
	[AddressID] [int] IDENTITY(1,1) NOT NULL,
	[Address1] [varchar](150) NOT NULL,
	[Address2] [varchar](150) NULL,
	[City] [varchar](150) NOT NULL,
	[Zip] [varchar](100) NOT NULL,
	[State] [varchar](150) NOT NULL,
	[CreatedBy] [varchar](150) NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[UpdatedBy] [varchar](150) NOT NULL,
	[UpdatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP
 CONSTRAINT [PK_Address] PRIMARY KEY CLUSTERED 
(
	[AddressID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


