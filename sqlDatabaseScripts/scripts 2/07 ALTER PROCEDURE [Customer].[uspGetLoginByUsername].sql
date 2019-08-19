USE [teamM]
GO
/****** Object:  StoredProcedure [Customer].[uspGetLoginByUsername]    Script Date: 8/4/2019 11:26:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Bedo Papajanian>
-- Create date: <8 4 2019>
-- Description:	<when someone try to login in our system this is the procedure we are calling>
-- =============================================
ALTER PROCEDURE [Customer].[uspGetLoginByUsername] 
	@userName varchar(100) 
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from 
	SET NOCOUNT ON;
	
    BEGIN TRY 
	  
		SELECT 
			l.[userName], 
			l.[password], 
			c.[CustomerID], 
			p.[firstName] + ' ' + p.[lastName] as fullName,
			c.[isAdmin]

		FROM [Customer].[Login] l 

		INNER JOIN [Customer].[Customer] c on l.CustomerID = c.CustomerID
		INNER JOIN [Customer].[Person] p on c.PersonID = p.PersonID

		WHERE l.UserName = @userName 

    END TRY
	 
    BEGIN CATCH
		RAISERROR('We are unable to proccess this request. Please try again later - db. ',16,1)
        SELECT
			ERROR_NUMBER() AS ErrorNumber,
			ERROR_SEVERITY() AS ErrorSeverity,
			ERROR_STATE() AS ErrorState,
			ERROR_PROCEDURE() AS ErrorProcedure,
			ERROR_LINE() AS ErrorLine,
			ERROR_MESSAGE() AS ErrorMessage

    END CATCH

END
