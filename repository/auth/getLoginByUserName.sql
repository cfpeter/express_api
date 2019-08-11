 BEGIN try 
    
    SELECT 
    l.[userName], 
    l.[passCode], 
    c.[CustomerID], 
    p.[firstName] + ' ' + p.[lastfName] as [name] 

    FROM [Customer].[Login] l 

    INNER JOIN [Customer].[Customer] c on l.CustomerID = c.CustomerID
    INNER JOIN [Customer].[Person] p on c.PersonID = p.PersonID

    WHERE userName = @userName
    END TRY


    BEGIN CATCH
        SELECT
			ERROR_NUMBER() AS ErrorNumber,
			ERROR_SEVERITY() AS ErrorSeverity,
			ERROR_STATE() AS ErrorState,
			ERROR_PROCEDURE() AS ErrorProcedure,
			ERROR_LINE() AS ErrorLine,
			ERROR_MESSAGE() AS ErrorMessage
    END CATCH