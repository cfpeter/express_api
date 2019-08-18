USE [teamM]
GO
/****** Object:  StoredProcedure [Customer].[uspGetLoginByUsername]    Script Date: 8/7/2019 11:26:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Bedo Papajanian>
-- Create date: <8 7 2019>
-- Description:	< get user data by customer ID >
-- =============================================
ALTER PROCEDURE [Customer].[uspGetUserByID] 
	@id int 
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from 
	SET NOCOUNT ON;
	
    BEGIN TRY 
	 
		SELECT  
			c.[CustomerID], 
			c.[CustomerTypeID],
			p.[PersonID],
			p.[firstName] ,
			p.[lastName] ,
			p.[DOB],
			p.[Gender],
			p.[Email],
			p.[CellPhone],
			p.[OtherPhone],
			p.[UpdatedDateTime]
			
		FROM [Customer].[Customer] c 
		INNER JOIN [Customer].[Person] p on c.PersonID = p.PersonID

		WHERE c.customerID = @id

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
