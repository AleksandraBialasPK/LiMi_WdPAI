<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="public/css/calendar.css">
    <link rel="stylesheet" type="text/css" href="public/css/Montserrat.css">
    <script src="https://kit.fontawesome.com/79d7c5829a.js" crossorigin="anonymous"></script>
    <title>Week by Limi</title>
</head>
<body>
<form class="new-event-form" id="form" method="POST" action="/addEvent">
    <div class="user-add-event">
        <div class="user-icon-add-event"></div>
        <div>Aleksandra</div>
    </div>
    <div class="add-event-form-divs">
        <label for="event-title-form">Title: </label>
        <input name="title" type="text" id="event-title-form" required maxlength="20"/>
    </div>
    <div class="add-event-form-divs">
        <label for="category-form">Category: </label>
        <select name="category" id="category-form">
            <option value="sports" class="sports">Sports</option>
            <option value="work-school" class="work-school">Work/School</option>
            <option value="home" class="home">Home</option>
            <option value="social" class="social">Social</option>
            <option value="other" class="other">Other</option>
        </select>
    </div>
    <div class="add-event-form-divs">
        <label for="event-date-form">Event date: </label>
        <input type="date" id="event-date-form" name="date" required/>
    </div>
    <div class="add-event-form-divs">
        <label for="start-time-form">Start time: </label>
        <input type="time" id="start-time-form" name="startTime" required>
    </div>
    <div class="add-event-form-divs">
        <label for="end-time-form">End time: </label>
        <input type="time" id="end-time-form" name="endTime" required>
    </div>
    <div class="add-event-form-divs"><button id="btn-add-new-event" type="submit">Add event!</button></div>
</form>
<section class="sidebar-nav">
    <button class="create-new-event" id="create-new-event-button">Create new event</button>
    <div class="events">
        <label for="Sports"><input type="checkbox" class="checkbox-event sports" id="Sports" name="Sports" checked>Sports</label>
        <label for="Work/School"><input type="checkbox" class="checkbox-event work-school" id="Work/School"
                                        name="Work/School" checked>Work/School</label>
        <label for="House"><input type="checkbox" class="checkbox-event home" id="House" name="House" checked>Home</label>
        <label for="Social"><input type="checkbox" class="checkbox-event social" id="Social" name="Social" checked>Social</label>
        <label for="Other"><input type="checkbox" class="checkbox-event other" id="other" name="other"
                                  checked>Other</label>
    </div>
    <div class="events">
        <?php foreach ($users as $user): ?>
            <div class="person" id="person_1">
                <div class="avatar">
                    <img src="public/avatars/<?= $user->getAvatar(); ?>">
                </div>
                <div class="nickname">
                    <span class="name"><?= $user->getName();?></span>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <a href="/logout"><button>Log out</button></a>
</section>
<main>
    <header>
        <nav class="header-with-days-of-the-week">
            <div class="views-nav">
                <a href="/day" class="day-week-nav">Day</a>
                <a href="/week" class="day-week-nav active-view">Week</a>
            </div>
            <div class="change-date push-right-week" id="change-date-week">
                <div class="nav-arrows prev-week-btn"><i class="fa-solid fa-chevron-left"></i></div>
                <div class="week week-with-dates"></div>
                <div class="nav-arrows next-week-btn"><i class="fa-solid fa-chevron-right"></i></div>
            </div>
        </nav>
        <div class="days-of-the-week" id="week-view-days-of-the-week">
            <div class="day-of-the-week">Sunday</div>
            <div class="day-of-the-week">Monday</div>
            <div class="day-of-the-week">Tuesday</div>
            <div class="day-of-the-week">Wednesday</div>
            <div class="day-of-the-week">Thursday</div>
            <div class="day-of-the-week">Friday</div>
            <div class="day-of-the-week">Saturday</div>
        </div>
    </header>
    <section class="calendar-with-timeline-container week">
        <div class="timeline">
        </div>
        <div class="calendar-container">
            <div class="week-grid-tiles">
                <div class="monday-grid-tiles weekday-grid">
                </div>
                <div class="tuesday-grid-tiles weekday-grid">
                </div>
                <div class="wednesday-grid-tiles weekday-grid">
                </div>
                <div class="thursday-grid-tiles weekday-grid">
                </div>
                <div class="friday-grid-tiles weekday-grid">
                </div>
                <div class="saturday-grid-tiles weekday-grid">
                </div>
                <div class="sunday-grid-tiles weekday-grid">
                </div>
            </div>
        </div>
    </section>
</main>
<script src="public/JS/week.js"></script>
<script src="public/JS/createNewEvent.js"></script>
</body>