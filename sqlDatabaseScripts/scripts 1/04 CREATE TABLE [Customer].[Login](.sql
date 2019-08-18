USE [teamM]
GO

/****** Object:  Table [Customer].[Login]    Script Date: 7/24/2019 2:18:35 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Customer].[Login](
	[LoginID] [int] IDENTITY(1,1) NOT NULL ,
	[CustomerID] [int] NOT NULL FOREIGN KEY REFERENCES [Customer].[Customer](CustomerID),
	[UserName] [varchar](150) NOT NULL,
	[PassCode] [varchar](255) NOT NULL,
	[Salt] [varchar](255) NOT NULL,
	[CreatedBy] [varchar](150) NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[UpdatedBy] [varchar](150) NOT NULL,
	[UpdatedDateTime] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP
 CONSTRAINT [PK_Login] PRIMARY KEY CLUSTERED 
(
	[LoginID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


