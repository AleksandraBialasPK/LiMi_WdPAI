create sequence "UserDetails_UserDetailsID_seq"
    as integer;

alter sequence "UserDetails_UserDetailsID_seq" owner to postgres;

create sequence "UserToEvent_UserToEventID_seq"
    as integer;

alter sequence "UserToEvent_UserToEventID_seq" owner to postgres;

-- Unknown how to generate base type type

alter type rxid owner to postgres;

create table "UserDetails"
(
    "userDetailsID" integer default nextval('"UserDetails_UserDetailsID_seq"'::regclass) not null
        primary key,
    name            varchar(255)                                                         not null,
    avatar          varchar(255)
);

alter table "UserDetails"
    owner to postgres;

alter sequence "UserDetails_UserDetailsID_seq" owned by "UserDetails"."userDetailsID";

create table "Roles"
(
    "roleID" serial
        primary key,
    role     varchar(100) not null
        unique
);

alter table "Roles"
    owner to postgres;

create table "Users"
(
    "userID"        serial
        primary key,
    email           varchar(255) not null,
    password        varchar(255) not null,
    "userDetailsID" integer      not null
        constraint users_userdetails_userdetailsid_fk
            references "UserDetails"
            on update cascade,
    "roleID"        integer      not null
        constraint users_roles_roleid_fk
            references "Roles"
            on update cascade
);

alter table "Users"
    owner to postgres;

create table "Events"
(
    "eventID"   serial
        primary key,
    title       varchar(100) not null,
    category    varchar(12)  not null,
    date        date         not null,
    "startTime" varchar(255) not null,
    "endTime"   varchar(255) not null
);

alter table "Events"
    owner to postgres;

create table "UserToEvent"
(
    "userToEventID" integer default nextval('"UserToEvent_UserToEventID_seq"'::regclass) not null
        primary key,
    "userID"        integer                                                              not null
        constraint usertoevent_users_userid_fk
            references "Users"
            on update cascade,
    "eventID"       integer                                                              not null
        constraint usertoevent_events_eventid_fk
            references "Events"
            on update cascade
);

alter table "UserToEvent"
    owner to postgres;

alter sequence "UserToEvent_UserToEventID_seq" owned by "UserToEvent"."userToEventID";

create table "Session"
(
    "sessionID" serial
        primary key,
    "userID"    integer not null
        constraint session_users_userid_fk
            references "Users"
            on update cascade
);

alter table "Session"
    owner to postgres;

create function timescaledb_fdw_handler() returns fdw_handler
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function timescaledb_fdw_handler() owner to postgres;

create function timescaledb_fdw_validator(text[], oid) returns void
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function timescaledb_fdw_validator(text[], oid) owner to postgres;

create function set_integer_now_func(hypertable regclass, integer_now_func regproc, replace_if_exists boolean default false) returns void
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function set_integer_now_func(regclass, regproc, boolean) owner to postgres;

create function create_hypertable(relation regclass, time_column_name name, partitioning_column name default NULL::name, number_partitions integer default NULL::integer, associated_schema_name name default NULL::name, associated_table_prefix name default NULL::name, chunk_time_interval anyelement default NULL::bigint, create_default_indexes boolean default true, if_not_exists boolean default false, partitioning_func regproc default NULL::regproc, migrate_data boolean default false, chunk_target_size text default NULL::text, chunk_sizing_func regproc default '_timescaledb_internal.calculate_chunk_interval'::regproc, time_partitioning_func regproc default NULL::regproc, replication_factor integer default NULL::integer, data_nodes name[] default NULL::name[]) returns setof table("hypertable_id" integer, "schema_name" name, "table_name" name, "created" boolean)
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function create_hypertable(regclass, name, name, integer, name, name, anyelement, boolean, boolean, regproc, boolean, text, regproc, regproc, integer, name[]) owner to postgres;

create function create_distributed_hypertable(relation regclass, time_column_name name, partitioning_column name default NULL::name, number_partitions integer default NULL::integer, associated_schema_name name default NULL::name, associated_table_prefix name default NULL::name, chunk_time_interval anyelement default NULL::bigint, create_default_indexes boolean default true, if_not_exists boolean default false, partitioning_func regproc default NULL::regproc, migrate_data boolean default false, chunk_target_size text default NULL::text, chunk_sizing_func regproc default '_timescaledb_internal.calculate_chunk_interval'::regproc, time_partitioning_func regproc default NULL::regproc, replication_factor integer default 1, data_nodes name[] default NULL::name[]) returns setof table("hypertable_id" integer, "schema_name" name, "table_name" name, "created" boolean)
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function create_distributed_hypertable(regclass, name, name, integer, name, name, anyelement, boolean, boolean, regproc, boolean, text, regproc, regproc, integer, name[]) owner to postgres;

create function set_adaptive_chunking(hypertable regclass, chunk_target_size text, inout chunk_sizing_func regproc default '_timescaledb_internal.calculate_chunk_interval'::regproc, out chunk_target_size bigint) returns record
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function set_adaptive_chunking(regclass, text, inout regproc, out bigint) owner to postgres;

create function set_chunk_time_interval(hypertable regclass, chunk_time_interval anyelement, dimension_name name default NULL::name) returns void
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function set_chunk_time_interval(regclass, anyelement, name) owner to postgres;

create function set_number_partitions(hypertable regclass, number_partitions integer, dimension_name name default NULL::name) returns void
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function set_number_partitions(regclass, integer, name) owner to postgres;

create function drop_chunks(relation regclass, older_than "any" default NULL::unknown, newer_than "any" default NULL::unknown, "verbose" boolean default false) returns setof setof text
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function drop_chunks(regclass, "any", "any", boolean) owner to postgres;

create function show_chunks(relation regclass, older_than "any" default NULL::unknown, newer_than "any" default NULL::unknown) returns setof setof regclass
    stable
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function show_chunks(regclass, "any", "any") owner to postgres;

create function add_dimension(hypertable regclass, column_name name, number_partitions integer default NULL::integer, chunk_time_interval anyelement default NULL::bigint, partitioning_func regproc default NULL::regproc, if_not_exists boolean default false) returns setof table("dimension_id" integer, "schema_name" name, "table_name" name, "column_name" name, "created" boolean)
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function add_dimension(regclass, name, integer, anyelement, regproc, boolean) owner to postgres;

create function attach_tablespace(tablespace name, hypertable regclass, if_not_attached boolean default false) returns void
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function attach_tablespace(name, regclass, boolean) owner to postgres;

create function detach_tablespace(tablespace name, hypertable regclass default NULL::regclass, if_attached boolean default false) returns integer
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function detach_tablespace(name, regclass, boolean) owner to postgres;

create function detach_tablespaces(hypertable regclass) returns integer
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function detach_tablespaces(regclass) owner to postgres;

create function show_tablespaces(hypertable regclass) returns setof setof name
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function show_tablespaces(regclass) owner to postgres;

create function add_data_node(node_name name, host text, database name default NULL::name, port integer default NULL::integer, if_not_exists boolean default false, bootstrap boolean default true, password text default NULL::text) returns setof table("node_name" name, "host" text, "port" integer, "database" name, "node_created" boolean, "database_created" boolean, "extension_created" boolean)
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function add_data_node(name, text, name, integer, boolean, boolean, text) owner to postgres;

create function delete_data_node(node_name name, if_exists boolean default false, force boolean default false, repartition boolean default true) returns boolean
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function delete_data_node(name, boolean, boolean, boolean) owner to postgres;

create function attach_data_node(node_name name, hypertable regclass, if_not_attached boolean default false, repartition boolean default true) returns setof table("hypertable_id" integer, "node_hypertable_id" integer, "node_name" name)
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function attach_data_node(name, regclass, boolean, boolean) owner to postgres;

create function detach_data_node(node_name name, hypertable regclass default NULL::regclass, if_attached boolean default false, force boolean default false, repartition boolean default true) returns integer
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function detach_data_node(name, regclass, boolean, boolean, boolean) owner to postgres;

create procedure distributed_exec(query text, node_list name[] default NULL::name[], transactional boolean default true)
    language c
as
$$
begin
-- missing source code
end;
$$;

alter procedure distributed_exec(text, name[], boolean) owner to postgres;

create function set_replication_factor(hypertable regclass, replication_factor integer) returns void
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function set_replication_factor(regclass, integer) owner to postgres;

create procedure refresh_continuous_aggregate(continuous_aggregate regclass, window_start "any", window_end "any")
    language c
as
$$
begin
-- missing source code
end;
$$;

alter procedure refresh_continuous_aggregate(regclass, "any", "any") owner to postgres;

create function time_bucket(bucket_width interval, ts timestamp) returns timestamp
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(interval, timestamp) owner to postgres;

create function time_bucket(bucket_width interval, ts timestamp with time zone) returns timestamp with time zone
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(interval, timestamp with time zone) owner to postgres;

create function time_bucket(bucket_width interval, ts date) returns date
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(interval, date) owner to postgres;

create function time_bucket(bucket_width interval, ts timestamp, origin timestamp) returns timestamp
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(interval, timestamp, timestamp) owner to postgres;

create function time_bucket(bucket_width interval, ts timestamp with time zone, origin timestamp with time zone) returns timestamp with time zone
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(interval, timestamp with time zone, timestamp with time zone) owner to postgres;

create function time_bucket(bucket_width interval, ts date, origin date) returns date
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(interval, date, date) owner to postgres;

create function time_bucket(bucket_width smallint, ts smallint) returns smallint
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(smallint, smallint) owner to postgres;

create function time_bucket(bucket_width integer, ts integer) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(integer, integer) owner to postgres;

create function time_bucket(bucket_width bigint, ts bigint) returns bigint
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(bigint, bigint) owner to postgres;

create function time_bucket(bucket_width smallint, ts smallint, "offset" smallint) returns smallint
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(smallint, smallint, smallint) owner to postgres;

create function time_bucket(bucket_width integer, ts integer, "offset" integer) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(integer, integer, integer) owner to postgres;

create function time_bucket(bucket_width bigint, ts bigint, "offset" bigint) returns bigint
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket(bigint, bigint, bigint) owner to postgres;

create function time_bucket(bucket_width interval, ts timestamp without time zone, "offset" interval) returns timestamp without time zone
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT public.time_bucket(bucket_width, ts-"offset")+"offset";
$$;

alter function time_bucket(interval, timestamp, interval) owner to postgres;

create function time_bucket(bucket_width interval, ts timestamp with time zone, "offset" interval) returns timestamp with time zone
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT public.time_bucket(bucket_width, ts-"offset")+"offset";
$$;

alter function time_bucket(interval, timestamp with time zone, interval) owner to postgres;

create function time_bucket(bucket_width interval, ts date, "offset" interval) returns date
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT (public.time_bucket(bucket_width, ts-"offset")+"offset")::date;
$$;

alter function time_bucket(interval, date, interval) owner to postgres;

create function get_telemetry_report(always_display_report boolean default false) returns text
    stable
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function get_telemetry_report(boolean) owner to postgres;

create function hypertable_detailed_size(hypertable regclass)
    returns TABLE(table_bytes bigint, index_bytes bigint, toast_bytes bigint, total_bytes bigint, node_name name)
    strict
    language plpgsql
as
$$
DECLARE
        table_name       NAME;
        schema_name      NAME;
        is_distributed   BOOL;
BEGIN
        SELECT relname, nspname, replication_factor > 0
        INTO STRICT table_name, schema_name, is_distributed
        FROM pg_class c
        INNER JOIN pg_namespace n ON (n.OID = c.relnamespace)
        INNER JOIN _timescaledb_catalog.hypertable ht ON (ht.schema_name = n.nspname AND ht.table_name = c.relname)
        WHERE c.OID = hypertable;

        CASE WHEN is_distributed THEN
            RETURN QUERY SELECT * FROM _timescaledb_internal.hypertable_remote_size(schema_name, table_name);
        ELSE
            RETURN QUERY SELECT *, NULL::name FROM _timescaledb_internal.hypertable_local_size(schema_name, table_name);
        END CASE;
END;
$$;

alter function hypertable_detailed_size(regclass) owner to postgres;

create function hypertable_size(hypertable regclass) returns bigint
    strict
    language plpgsql
as
$$
DECLARE
  num_bytes BIGINT;
BEGIN
   SELECT sum(hd.total_bytes) INTO STRICT num_bytes
   FROM hypertable_detailed_size(hypertable) hd;
   RETURN num_bytes;
END;
$$;

alter function hypertable_size(regclass) owner to postgres;

create function chunks_detailed_size(hypertable regclass)
    returns TABLE(chunk_schema name, chunk_name name, table_bytes bigint, index_bytes bigint, toast_bytes bigint, total_bytes bigint, node_name name)
    strict
    language plpgsql
as
$$
DECLARE
        table_name       NAME;
        schema_name      NAME;
        is_distributed   BOOL;
BEGIN
        SELECT relname, nspname, replication_factor > 0
        INTO STRICT table_name, schema_name, is_distributed
        FROM pg_class c
        INNER JOIN pg_namespace n ON (n.OID = c.relnamespace)
        INNER JOIN _timescaledb_catalog.hypertable ht ON (ht.schema_name = n.nspname AND ht.table_name = c.relname)
        WHERE c.OID = hypertable;

        CASE WHEN is_distributed THEN
            RETURN QUERY SELECT ch.chunk_schema, ch.chunk_name, ch.table_bytes, ch.index_bytes, 
                        ch.toast_bytes, ch.total_bytes, ch.node_name   
            FROM _timescaledb_internal.chunks_remote_size(schema_name, table_name) ch;
        ELSE
            RETURN QUERY SELECT chl.chunk_schema, chl.chunk_name, chl.table_bytes, chl.index_bytes, 
                        chl.toast_bytes, chl.total_bytes, NULL::NAME   
            FROM _timescaledb_internal.chunks_local_size(schema_name, table_name) chl;
        END CASE;
END;
$$;

alter function chunks_detailed_size(regclass) owner to postgres;

create function approximate_row_count(relation regclass) returns bigint
    strict
    language plpgsql
as
$$
DECLARE
	table_name       NAME;
	schema_name      NAME;
	row_count_parent BIGINT;
	row_count        BIGINT;
BEGIN
	SELECT relname, nspname, c.reltuples::bigint
	INTO table_name, schema_name, row_count_parent
	FROM pg_class c
	INNER JOIN pg_namespace n ON (n.OID = c.relnamespace)
	WHERE c.OID = relation;

	WITH RECURSIVE inherited_id AS
	(
		SELECT i.inhrelid AS oid
		FROM pg_inherits i
		JOIN pg_class base ON i.inhparent = base.oid
		JOIN pg_namespace base_ns ON base.relnamespace = base_ns.oid
		WHERE base_ns.nspname = schema_name AND base.relname = table_name
		UNION
		SELECT i.inhrelid AS oid
		FROM pg_inherits i
		JOIN inherited_id b ON i.inhparent = b.oid
	)
	SELECT sum(child.reltuples)::bigint
	INTO row_count
	FROM inherited_id i
	JOIN pg_class child ON i.oid = child.oid
	JOIN pg_namespace child_ns ON child.relnamespace = child_ns.oid;

	IF row_count IS NULL THEN
		RETURN row_count_parent;
	END IF;
	RETURN row_count_parent + row_count;
END
$$;

alter function approximate_row_count(regclass) owner to postgres;

create function chunk_compression_stats(hypertable regclass)
    returns TABLE(chunk_schema name, chunk_name name, compression_status text, before_compression_table_bytes bigint, before_compression_index_bytes bigint, before_compression_toast_bytes bigint, before_compression_total_bytes bigint, after_compression_table_bytes bigint, after_compression_index_bytes bigint, after_compression_toast_bytes bigint, after_compression_total_bytes bigint, node_name name)
    stable
    strict
    language plpgsql
as
$$
DECLARE
    table_name name;
    schema_name name;
    is_distributed bool;
BEGIN
    SELECT
        relname,
        nspname,
        replication_factor > 0 INTO STRICT table_name,
        schema_name,
        is_distributed
    FROM
        pg_class c
        INNER JOIN pg_namespace n ON (n.OID = c.relnamespace)
        INNER JOIN _timescaledb_catalog.hypertable ht ON (ht.schema_name = n.nspname
                AND ht.table_name = c.relname)
    WHERE
        c.OID = hypertable;
    CASE WHEN is_distributed THEN
        RETURN QUERY
        SELECT
            *
        FROM
            _timescaledb_internal.compressed_chunk_remote_stats (schema_name, table_name);
        ELSE
            RETURN QUERY
            SELECT
                *,
                NULL::name
            FROM
                _timescaledb_internal.compressed_chunk_local_stats (schema_name, table_name);
    END CASE;
END;
$$;

alter function chunk_compression_stats(regclass) owner to postgres;

create function hypertable_compression_stats(hypertable regclass)
    returns TABLE(total_chunks bigint, number_compressed_chunks bigint, before_compression_table_bytes bigint, before_compression_index_bytes bigint, before_compression_toast_bytes bigint, before_compression_total_bytes bigint, after_compression_table_bytes bigint, after_compression_index_bytes bigint, after_compression_toast_bytes bigint, after_compression_total_bytes bigint, node_name name)
    stable
    strict
    language plpgsql
as
$$
BEGIN
    RETURN QUERY
    SELECT
        count(*) AS total_chunks,
        count(*) FILTER (WHERE ch.compression_status = 'Compressed') AS number_compressed_chunks,
        sum(ch.before_compression_table_bytes)::bigint AS before_compression_table_bytes,
        sum(ch.before_compression_index_bytes)::bigint AS before_compression_index_bytes,
        sum(ch.before_compression_toast_bytes)::bigint AS before_compression_toast_bytes,
        sum(ch.before_compression_total_bytes)::bigint AS before_compression_total_bytes,
        sum(ch.after_compression_table_bytes)::bigint AS after_compression_table_bytes,
        sum(ch.after_compression_index_bytes)::bigint AS after_compression_index_bytes,
        sum(ch.after_compression_toast_bytes)::bigint AS after_compression_toast_bytes,
        sum(ch.after_compression_total_bytes)::bigint AS after_compression_total_bytes,
        ch.node_name
    FROM
        chunk_compression_stats (hypertable) ch
    GROUP BY
        ch.node_name;
END;
$$;

alter function hypertable_compression_stats(regclass) owner to postgres;

create function hypertable_index_size(index_name regclass) returns bigint
    strict
    language plpgsql
as
$$
DECLARE
        ht_index_name       NAME;
        ht_schema_name      NAME;
        ht_name      NAME;
        is_distributed   BOOL;
        ht_id INTEGER;
        index_bytes BIGINT;
BEGIN

   SELECT c.relname, cl.relname, nsp.nspname       
   INTO STRICT ht_index_name, ht_name, ht_schema_name  
   FROM pg_class c, pg_index cind, pg_class cl, pg_namespace nsp
   WHERE c.oid = cind.indexrelid AND cind.indrelid = cl.oid
         AND cl.relnamespace = nsp.oid AND c.oid = index_name;
        
   SELECT replication_factor > 0
   INTO STRICT is_distributed
   FROM _timescaledb_catalog.hypertable ht
   WHERE ht.schema_name = ht_schema_name AND ht.table_name = ht_name;

   CASE WHEN is_distributed THEN
         SELECT _timescaledb_internal.indexes_remote_size(ht_schema_name, ht_name, ht_index_name) 
         INTO index_bytes ;
   ELSE
         SELECT il.total_bytes
         INTO index_bytes
         FROM _timescaledb_internal.indexes_local_size(ht_schema_name, ht_index_name) il;
   END CASE;
   RETURN index_bytes;
END;
$$;

alter function hypertable_index_size(regclass) owner to postgres;

create function time_bucket_gapfill(bucket_width smallint, ts smallint, start smallint default NULL::smallint, finish smallint default NULL::smallint) returns smallint
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket_gapfill(smallint, smallint, smallint, smallint) owner to postgres;

create function time_bucket_gapfill(bucket_width integer, ts integer, start integer default NULL::integer, finish integer default NULL::integer) returns integer
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket_gapfill(integer, integer, integer, integer) owner to postgres;

create function time_bucket_gapfill(bucket_width bigint, ts bigint, start bigint default NULL::bigint, finish bigint default NULL::bigint) returns bigint
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket_gapfill(bigint, bigint, bigint, bigint) owner to postgres;

create function time_bucket_gapfill(bucket_width interval, ts date, start date default NULL::date, finish date default NULL::date) returns date
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket_gapfill(interval, date, date, date) owner to postgres;

create function time_bucket_gapfill(bucket_width interval, ts timestamp, start timestamp default NULL::timestamp without time zone, finish timestamp default NULL::timestamp without time zone) returns timestamp
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket_gapfill(interval, timestamp, timestamp, timestamp) owner to postgres;

create function time_bucket_gapfill(bucket_width interval, ts timestamp with time zone, start timestamp with time zone default NULL::timestamp with time zone, finish timestamp with time zone default NULL::timestamp with time zone) returns timestamp with time zone
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_bucket_gapfill(interval, timestamp with time zone, timestamp with time zone, timestamp with time zone) owner to postgres;

create function locf(value anyelement, prev anyelement default NULL::unknown, treat_null_as_missing boolean default false) returns anyelement
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function locf(anyelement, anyelement, boolean) owner to postgres;

create function interpolate(value smallint, prev record default NULL::record, next record default NULL::record) returns smallint
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function interpolate(smallint, record, record) owner to postgres;

create function interpolate(value integer, prev record default NULL::record, next record default NULL::record) returns integer
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function interpolate(integer, record, record) owner to postgres;

create function interpolate(value bigint, prev record default NULL::record, next record default NULL::record) returns bigint
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function interpolate(bigint, record, record) owner to postgres;

create function interpolate(value real, prev record default NULL::record, next record default NULL::record) returns real
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function interpolate(real, record, record) owner to postgres;

create function interpolate(value double precision, prev record default NULL::record, next record default NULL::record) returns double precision
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function interpolate(double precision, record, record) owner to postgres;

create function reorder_chunk(chunk regclass, index regclass default NULL::regclass, "verbose" boolean default false) returns void
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function reorder_chunk(regclass, regclass, boolean) owner to postgres;

create function move_chunk(chunk regclass, destination_tablespace name, index_destination_tablespace name default NULL::name, reorder_index regclass default NULL::regclass, "verbose" boolean default false) returns void
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function move_chunk(regclass, name, name, regclass, boolean) owner to postgres;

create function compress_chunk(uncompressed_chunk regclass, if_not_compressed boolean default false) returns regclass
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function compress_chunk(regclass, boolean) owner to postgres;

create function decompress_chunk(uncompressed_chunk regclass, if_compressed boolean default false) returns regclass
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function decompress_chunk(regclass, boolean) owner to postgres;

create function timescaledb_pre_restore() returns boolean
    language plpgsql
as
$fun$
DECLARE
    db text;
BEGIN
    SELECT current_database() INTO db;
    EXECUTE format($$ALTER DATABASE %I SET timescaledb.restoring ='on'$$, db);
    SET SESSION timescaledb.restoring = 'on';
    PERFORM _timescaledb_internal.stop_background_workers();
    --exported uuid may be included in the dump so backup the version
    UPDATE _timescaledb_catalog.metadata SET key='exported_uuid_bak' WHERE key='exported_uuid';
    RETURN true;
END
$fun$;

alter function timescaledb_pre_restore() owner to postgres;

create function timescaledb_post_restore() returns boolean
    language plpgsql
as
$fun$
DECLARE
    db text;
BEGIN
    SELECT current_database() INTO db;
    EXECUTE format($$ALTER DATABASE %I RESET timescaledb.restoring $$, db);
    RESET timescaledb.restoring;
    PERFORM _timescaledb_internal.restart_background_workers();

    --try to restore the backed up uuid, if the restore did not set one
    INSERT INTO _timescaledb_catalog.metadata
       SELECT 'exported_uuid', value, include_in_telemetry FROM _timescaledb_catalog.metadata WHERE key='exported_uuid_bak'
       ON CONFLICT DO NOTHING;
    DELETE FROM _timescaledb_catalog.metadata WHERE key='exported_uuid_bak';

    RETURN true;
END
$fun$;

alter function timescaledb_post_restore() owner to postgres;

create function add_job(proc regproc, schedule_interval interval, config jsonb default NULL::jsonb, initial_start timestamp with time zone default NULL::timestamp with time zone, scheduled boolean default true) returns integer
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function add_job(regproc, interval, jsonb, timestamp with time zone, boolean) owner to postgres;

create function delete_job(job_id integer) returns void
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function delete_job(integer) owner to postgres;

create procedure run_job(job_id integer)
    language c
as
$$
begin
-- missing source code
end;
$$;

alter procedure run_job(integer) owner to postgres;

create function alter_job(job_id integer, schedule_interval interval default NULL::interval, max_runtime interval default NULL::interval, max_retries integer default NULL::integer, retry_period interval default NULL::interval, scheduled boolean default NULL::boolean, config jsonb default NULL::jsonb, next_start timestamp with time zone default NULL::timestamp with time zone, if_exists boolean default false) returns setof table("job_id" integer, "schedule_interval" interval, "max_runtime" interval, "max_retries" integer, "retry_period" interval, "scheduled" boolean, "config" jsonb, "next_start" timestamp with time zone)
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function alter_job(integer, interval, interval, integer, interval, boolean, jsonb, timestamp with time zone, boolean) owner to postgres;

create function add_retention_policy(relation regclass, drop_after "any", if_not_exists boolean default false) returns integer
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function add_retention_policy(regclass, "any", boolean) owner to postgres;

create function remove_retention_policy(relation regclass, if_exists boolean default false) returns void
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function remove_retention_policy(regclass, boolean) owner to postgres;

create function add_reorder_policy(hypertable regclass, index_name name, if_not_exists boolean default false) returns integer
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function add_reorder_policy(regclass, name, boolean) owner to postgres;

create function remove_reorder_policy(hypertable regclass, if_exists boolean default false) returns void
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function remove_reorder_policy(regclass, boolean) owner to postgres;

create function add_compression_policy(hypertable regclass, compress_after "any", if_not_exists boolean default false) returns integer
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function add_compression_policy(regclass, "any", boolean) owner to postgres;

create function remove_compression_policy(hypertable regclass, if_exists boolean default false) returns boolean
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function remove_compression_policy(regclass, boolean) owner to postgres;

create function add_continuous_aggregate_policy(continuous_aggregate regclass, start_offset "any", end_offset "any", schedule_interval interval, if_not_exists boolean default false) returns integer
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function add_continuous_aggregate_policy(regclass, "any", "any", interval, boolean) owner to postgres;

create function remove_continuous_aggregate_policy(continuous_aggregate regclass, if_not_exists boolean default false) returns void
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function remove_continuous_aggregate_policy(regclass, boolean) owner to postgres;

create aggregate first(anyelement, "any") (
    sfunc = _timescaledb_internal.first_sfunc,
    stype = internal,
    finalfunc = _timescaledb_internal.bookend_finalfunc,
    finalfunc_extra,
    combinefunc = _timescaledb_internal.first_combinefunc,
    serialfunc = _timescaledb_internal.bookend_serializefunc,
    deserialfunc = _timescaledb_internal.bookend_deserializefunc,
    parallel = safe
    );

alter aggregate first(anyelement, "any") owner to postgres;

create aggregate last(anyelement, "any") (
    sfunc = _timescaledb_internal.last_sfunc,
    stype = internal,
    finalfunc = _timescaledb_internal.bookend_finalfunc,
    finalfunc_extra,
    combinefunc = _timescaledb_internal.last_combinefunc,
    serialfunc = _timescaledb_internal.bookend_serializefunc,
    deserialfunc = _timescaledb_internal.bookend_deserializefunc,
    parallel = safe
    );

alter aggregate last(anyelement, "any") owner to postgres;

create aggregate histogram(double precision, double precision, double precision, integer) (
    sfunc = _timescaledb_internal.hist_sfunc,
    stype = internal,
    finalfunc = _timescaledb_internal.hist_finalfunc,
    finalfunc_extra,
    combinefunc = _timescaledb_internal.hist_combinefunc,
    serialfunc = _timescaledb_internal.hist_serializefunc,
    deserialfunc = _timescaledb_internal.hist_deserializefunc,
    parallel = safe
    );

alter aggregate histogram(double precision, double precision, double precision, integer) owner to postgres;


