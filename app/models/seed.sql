create table exercise (exercise_name varchar(100), target_weight integer, target_sets integer, target_reps integer, target_body_part varchar(100));


insert into
    exercise (exercise_name, target_weight, target_sets, target_reps)  values ('dead lift', 225, 3, 8),
           ('bicep isolation curl', 30, 4, 8),
           ('standing bicep curl', 135, 2, 1),
           ('bench press', 275, 3, 5),
           ('incline bench press', 185, 3, 6),
           ('skull scrusher', 115, 3, 8),
           ('rear delt fly', 10, 3, 12),
           ('weighted dip', 125, 3, 6);

create table workout (workout_id serial, workout_name varchar(100));

insert into workout (workout_name)
values
('chest & triceps'), ('back & biceps'), ('legs'), ('cardio'), ('shoulders & legs');
