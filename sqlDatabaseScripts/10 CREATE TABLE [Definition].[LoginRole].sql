USE [teamM]
GO

/****** Object:  Table [Definition].[LoginRole]    Script Date: 8/8/2019 2:11:20 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Definition].[LoginRole]
	(
	[LoginRoleID] [int] IDENTITY(1,1) NOT NULL,
	[LoginID] [int] NOT NULL FOREIGN KEY REFERENCES [Customer].[Login](LoginID),
	[RoleTypeID] [int] NOT NULL FOREIGN KEY REFERENCES [Definition].[RoleType](RoleTypeID),
	[Name] [varchar](100) NOT NULL,
	[Descripation] [text] NOT NULL,
	[CreatedBy] [varchar](150) NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL,
	[UpdatedBy] [varchar](150) NOT NULL,
	[UpdatedDateTime] [datetime] NOT NULL
 CONSTRAINT [PK_LoginRole] PRIMARY KEY CLUSTERED 
(
	[LoginRoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


