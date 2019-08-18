USE [teamM]
GO
/****** Object:  StoredProcedure [Customer].[uspUpdatePerson]    Script Date: 8/1/2019 3:49:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Bedo Garabedian>
-- Create date: <7 10 2019>
-- Description:	<update person table>
-- =============================================
ALTER PROCEDURE [Customer].[uspUpdatePerson]
	 @personID int  
	,@customerID int
	,@firstName	varchar(100)
	,@lastName	varchar(100) 
	,@dob		varchar(50)
	,@gender	varchar(50)
	,@email		varchar(150)
	,@cellPhone	varchar(15)
	,@otherPhone varchar(15)
	,@updatedBy varchar(100)
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	 
	UPDATE [Customer].[Person]
          SET
			[FirstName]			= @firstName
           ,[LastName]			= @lastName
           ,[DOB]				= @dob
           ,[Gender]			= @gender
           ,[Email]				= @email
           ,[CellPhone]			= @cellPhone
           ,[OtherPhone]		= @otherPhone 
           ,[UpdatedBy]			= @updatedBy
           ,[UpdatedDateTime]	= CURRENT_TIMESTAMP 

		   WHERE PersonID = @personID

	exec [Customer].[uspGetUserByID]  @customerID
		    

END
