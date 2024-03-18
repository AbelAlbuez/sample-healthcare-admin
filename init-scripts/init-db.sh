#!/bin/bash
# Execute SQL scripts present in /docker-entrypoint-initdb.d/sql-scripts
for file in /docker-entrypoint-initdb.d/sql-scripts/*; do
    case "$file" in
        *.sql)    echo "Executing script $file"; /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '@A19981811@' -d master -i "$file"; echo "Execution of script $file completed"; echo ;;
        *)        echo "Ignoring $file" ;;
    esac
done

# Start the SQL server
/opt/mssql/bin/sqlservr
