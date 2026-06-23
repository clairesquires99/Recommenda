-- ============================================================
-- Recommenda – Supabase schema
-- ============================================================

create table public.users (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null unique,
  created_at timestamptz default now()
);

create table public.follows (
  id           uuid primary key default gen_random_uuid(),
  follower_id  uuid not null references public.users (id) on delete cascade,
  following_id uuid not null references public.users (id) on delete cascade,
  created_at   timestamptz default now(),
  unique (follower_id, following_id)
);

create table public.recommendations (
  id           uuid primary key default gen_random_uuid(),
  from_user_id uuid references public.users (id) on delete set null,
  to_user_id   uuid references public.users (id) on delete set null,
  media_type   text not null,
  title        text not null,
  creator      text not null,
  external_id  text not null,
  note         text,
  created_at   timestamptz default now(),
  seen_at      timestamptz
);

-- No Supabase Auth — disable RLS and grant anon full access.
alter table public.users disable row level security;
alter table public.follows disable row level security;
alter table public.recommendations disable row level security;

grant usage on schema public to anon;
grant all on public.users to anon;
grant all on public.follows to anon;
grant all on public.recommendations to anon;
