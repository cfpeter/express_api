
INSERT INTO [Customer].[customer]
           (
            [customerID]
           ,[UserName]
           ,[PassCode]
           ,[Salt]
           ,[CreatedBy] 
           ,[UpdatedBy] 
           )
     VALUES
           ( 
            @customerID     
           ,@userName
           ,@passCode
           ,@salt 
           ,@createrBy 
           ,@updatedBy 
           )

SELECT SCOPE_IDENTITY() AS id;