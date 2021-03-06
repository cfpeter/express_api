USE [teamM]
GO
/****** Object:  StoredProcedure [Customer].[uspAddUserRegister]    Script Date: 8/4/2019 11:21:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		 BEDO PAPAJANIAN
-- Create date:  7/25/2019
-- Description:	 
-- =============================================
ALTER PROCEDURE [Customer].[uspAddUserRegister] 
	-- Add the parameters for the stored procedure here
	@firstName varchar(100) ,
	@lastName varchar(100) ,
	@gender varchar(100) ,
	@email varchar(150) ,
	@userName varchar(150) ,
	@password varchar(255) ,
	@salt varchar(255) ,
	@customerTypeName varchar(255),
	@createdBy varchar(150)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
    -- Insert statements for procedure here
	BEGIN TRY
		BEGIN TRANSACTION AddUserRegister
			
			DECLARE @customerTypeID int = (SELECT [CustomerTypeID] FROM [Customer].[CustomerType] WHERE [Name] = @customerTypeName)

			INSERT INTO [Customer].[Person]
			   ([FirstName]
			   ,[LastName]
			   ,[Gender]
			   ,[Email]
			   ,[CreatedBy]
			   ,[CreatedDateTime]
			   ,[UpdatedBy]
			   ,[UpdatedDateTime]
			   )
			VALUES
			   (
			   @firstName
			   ,@lastName
			   ,@gender
			   ,@email
			   ,@createdBy
			   ,CURRENT_TIMESTAMP
			   ,@createdBy
			   ,CURRENT_TIMESTAMP
			   )
			   DECLARE @personID int = SCOPE_IDENTITY()

			INSERT INTO [Customer].[Customer]
			(
				[CustomerTypeID],
				[PersonID],
				[CreatedBy],
				[CreatedDateTime],
				[UpdatedBy],
				[UpdatedDateTime]
			)
			VALUES
			(
				@customerTypeID,
				@personID,
				@createdBy,
				CURRENT_TIMESTAMP,
				@createdBy,
				CURRENT_TIMESTAMP
			)
			DECLARE @customerID int = SCOPE_IDENTITY()
			
			INSERT INTO [Customer].[Login]
			(
				[CustomerID],
				[UserName],
				[password],
				[Salt],
				[CreatedBy],
				[CreatedDateTime],
				[UpdatedBy],
				[UpdatedDateTime]

			)
			VALUES
			(
			@customerID,
			@userName,
			@password,
			@salt,
			@createdBy,
			CURRENT_TIMESTAMP,
			@createdBy,
			CURRENT_TIMESTAMP
			)
			
		
		SELECT 
			l.[userName], 
			l.[password], 
			c.[CustomerID], 
			p.[firstName] + ' ' + p.[lastName] as fullName,
			c.[isAdmin]

		FROM [Customer].[Login] l 

		INNER JOIN [Customer].[Customer] c on l.CustomerID = c.CustomerID
		INNER JOIN [Customer].[Person] p on c.PersonID = p.PersonID

		WHERE c.[CustomerID] = @customerID
		
		
		COMMIT TRANSACTION AddUserRegister 
		 
	END TRY

	BEGIN CATCH 
		IF (@@TRANCOUNT > 0)
		BEGIN
			ROLLBACK TRANSACTION AddUserRegister
			PRINT 'Error detected, all changes reversed'
		END 
		SELECT
			ERROR_NUMBER() AS ErrorNumber,
			ERROR_SEVERITY() AS ErrorSeverity,
			ERROR_STATE() AS ErrorState,
			ERROR_PROCEDURE() AS ErrorProcedure,
			ERROR_LINE() AS ErrorLine,
			ERROR_MESSAGE() AS ErrorMessage

		RAISERROR('We are unable to proccess this request. Please try again later - db. ',16,1)
	END CATCH

END
