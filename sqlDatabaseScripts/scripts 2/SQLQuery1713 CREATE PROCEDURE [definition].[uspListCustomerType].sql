use [teamM]
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Bedo Papajanian
-- Create date: 8 11 2019
-- Description:	<list all the customer type/ will be used on the register page>
-- =============================================
CREATE PROCEDURE [definition].[uspListCustomerType]  

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- SELECT statements for procedure here
	SELECT [Name] 
	FROM [Customer].[CustomerType]
	
END
GO
