# PostgreSQL

> psql



# 常见命令

```postgresql
-- login psql
psql -U postgrs -W -- entering and then typing password
-- Commands
\dt  -- show tables
\l -- list databases
\? -- help

psql -U postgres -W wawawa
\c dbname -- 切换数据库

\x -- toggle expanded  output, display result vertically

```

```postgresql
-- add account and password

-- create user
CREATE ROLE newuser;

-- create password
ALTER ROLE newuser WITH PASSWORD 'newpassword';

-- grant permission
ALTER ROLE newuser CREATEDB;
ALTER ROLE newuser LOGIN;

GRANT ALL PRIVILEGES ON DATABASE 数据库名 TO 角色名;

-- raise to superuser
ALTER ROLE 角色名 WITH SUPERUSER;
