USE [teamM]
GO
/****** Object:  StoredProcedure [Customer].[uspInsertPerson]    Script Date: 8/1/2019 3:49:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Bedo Garabedian>
-- Create date: <7 10 2019>
-- Description:	<Insert to person table>
-- =============================================
ALTER PROCEDURE [Customer].[uspInsertPerson]
	 @firstName	varchar(100)
	,@lastName	varchar(100) 
	,@dob		varchar(50)
	,@gender	varchar(50)
	,@email		varchar(150)
	,@cellPhone	varchar(15)
	,@otherPhone varchar(15)
	,@userName varchar(100)
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here 
	INSERT INTO [Customer].[Person]
           (
            [FirstName]
           ,[LastName]
           ,[DOB]
           ,[Gender]
           ,[Email]
           ,[CellPhone]
           ,[OtherPhone]
           ,[CreatedBy]
           ,[CreatedDateTime]
           ,[UpdatedBy]
           ,[UpdatedDateTime]
		   )
     VALUES
           (
			@firstName
           ,@lastName
           ,@dob
           ,@gender
           ,@email
           ,@cellPhone
           ,@otherPhone
           ,@userName
           ,CURRENT_TIMESTAMP
           ,@userName
           ,CURRENT_TIMESTAMP
		   )

		   SELECT * FROM [Customer].[Person] 

END
