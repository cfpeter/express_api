USE [teamM]
GO

/****** Object:  Table [Customer].[Customer]    Script Date: 7/24/2019 1:58:00 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Customer].[Customer](
	[CustomerID] [int]  IDENTITY(1,1) NOT NULL,
	[CustomerTypeID] [int] NOT NULL FOREIGN KEY REFERENCES [Customer].[CustomerType](CustomerTypeID),
	[PersonID] [int] NOT NULL FOREIGN KEY REFERENCES [Customer].[Person](PersonID),
	[CreatedBy] [varchar](150) NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[UpdatedBy] [varchar](150) NOT NULL,
	[UpdatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP
	CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

