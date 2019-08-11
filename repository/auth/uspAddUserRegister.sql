exec  [Customer].[uspAddUserRegister] 
                    @firstName,
                    @lastName,
                    @email,
                    @userName,
                    @passCode,
                    @salt,
                    @createdBy