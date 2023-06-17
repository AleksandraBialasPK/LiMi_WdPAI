<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="public/css/calendar.css">
    <link rel="stylesheet" type="text/css" href="public/css/Montserrat.css">
    <script src="https://kit.fontawesome.com/79d7c5829a.js" crossorigin="anonymous"></script>
    <title>Day by Limi</title>
</head>
<body>
    <form class="new-event-form" id="form">
        <div class="user-add-event">
            <div class="user-icon-add-event"></div>
            <div>Aleksandra</div>
        </div>
        <div class="add-event-form-divs">
            <label for="event-title-form">Title: </label>
            <input name="event-name" type="text" id="event-title-form" required maxlength="20"/>
        </div>
        <div class="add-event-form-divs">
            <label for="category-form">Category: </label>
            <select name="categories" id="category-form">
                <option value="sports" class="sports">Sports</option>
                <option value="work-school" class="work-school">Work/School</option>
                <option value="home" class="home">Home</option>
                <option value="social" class="social">Social</option>
                <option value="other" class="other">Other</option>
            </select>
        </div>
        <div class="add-event-form-divs">
            <label for="event-date-form">Event date: </label>
            <input type="date" id="event-date-form" name="event-date-form" required/>
        </div>
        <div class="add-event-form-divs">
            <label for="start-time-form">Start time: </label>
            <input type="time" id="start-time-form" name="start-time-form" required>
        </div>
        <div class="add-event-form-divs">
            <label for="end-time-form">End time: </label>
            <input type="time" id="end-time-form" name="end-time-form" required>
        </div>
        <button id="btn-add-new-event" type="submit">Add event!</button>
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
            <label for="Person1"><input type="checkbox" class="checkbox-person" id="Person1" name="Person" checked>Aleksandra</label>
            <label for="Person2"><input type="checkbox" class="checkbox-person" id="Person2" name="Person"
                                    checked>Aleks</label>
            <label for="Person3"><input type="checkbox" class="checkbox-person" id="Person3" name="Person"
                                    checked>Hanna</label>
            <label for="Person4"><input type="checkbox" class="checkbox-person" id="Person4" name="Person"
                                    checked>Dawid</label>
        </div>
        <button>Log out</button>
    </section>
    <main>
        <header>
            <nav class="header-with-days-of-the-week">
                <div class="views-nav">
                    <a href="day.html" class="day-week-nav active-view">Day</a>
                    <a href="week.html" class="day-week-nav">Week</a>
                </div>
                <div class="change-date push-right-day" id="change-date-day">
                    <div class="nav-arrows prev-day-btn"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="day-with-date day"></div>
                    <div class="nav-arrows next-day-btn"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </nav>
        </header>
        <section class="calendar-with-timeline-container">
            <div class="timeline">
            </div>
            <div class="day-grid-tile-container">
            </div>
            <div class="event-container">
            </div>
        </section>
    </main>
    <script src="../JS/day.js"></script>
    <script src="../JS/createNewEvent.js"></script>
</body>