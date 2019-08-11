USE [teamM]
GO

/****** Object:  Table [Customer].[PersonAddress]    Script Date: 8/8/2019 2:26:54 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Customer].[PersonAddress](
	[PersonAddressID] [int] IDENTITY(1,1) NOT NULL,
	[PersonID] [int] NOT NULL FOREIGN KEY REFERENCES [Customer].[Person](PersonID),
	[AddressID] [int] NOT NULL FOREIGN KEY REFERENCES [Customer].[Address](AddressID),
	[CreatedBy] [varchar](150) NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[UpdatedBy] [varchar](150) NOT NULL,
	[UpdatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP
 CONSTRAINT [PK_PersonAddress] PRIMARY KEY CLUSTERED 
(
	[PersonAddressID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

