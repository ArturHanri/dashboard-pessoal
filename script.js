const STORAGE_KEY = "fitness_dashboard_state_v1";
const dayNames = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];
const shortDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const defaultState = {
  activeDay: getTodayName(),
  profile: {
    name: "Jason",
    tagline: "Foco. Disciplina. Evolução.",
  },
  workouts: [
    {
      day: "Segunda",
      split: "Push",
      exercises: [
        { name: "Supino Reto", detail: "4 séries x 8-10 reps", load: "60 kg" },
        {
          name: "Desenvolvimento",
          detail: "3 séries x 8-10 reps",
          load: "28 kg",
        },
        {
          name: "Elevação Lateral",
          detail: "3 séries x 12-15 reps",
          load: "10 kg",
        },
        {
          name: "Tríceps Pulley",
          detail: "3 séries x 12-15 reps",
          load: "25 kg",
        },
      ],
    },
    {
      day: "Terça",
      split: "Pull",
      exercises: [
        {
          name: "Levantamento Terra",
          detail: "4 séries x 5 reps",
          load: "90 kg",
        },
        {
          name: "Remada Curvada",
          detail: "4 séries x 8-10 reps",
          load: "50 kg",
        },
        { name: "Puxada Alta", detail: "3 séries x 10-12 reps", load: "45 kg" },
        {
          name: "Rosca Direta",
          detail: "3 séries x 12-15 reps",
          load: "20 kg",
        },
      ],
    },
    {
      day: "Quarta",
      split: "Legs",
      exercises: [
        { name: "Agachamento", detail: "4 séries x 6-8 reps", load: "80 kg" },
      ],
    },
    {
      day: "Quinta",
      split: "Upper",
      exercises: [
        {
          name: "Supino Inclinado",
          detail: "3 séries x 8-10 reps",
          load: "34 kg",
        },
      ],
    },
    {
      day: "Sexta",
      split: "Lower",
      exercises: [
        { name: "Stiff", detail: "4 séries x 8-10 reps", load: "70 kg" },
      ],
    },
    {
      day: "Sábado",
      split: "Cardio",
      exercises: [{ name: "Mobilidade", detail: "20 min + core", load: "-" }],
    },
    {
      day: "Domingo",
      split: "Descanso",
      exercises: [{ name: "Caminhada leve", detail: "30 min", load: "-" }],
    },
  ],
  runs: [
    {
      day: "Segunda",
      title: "Rodagem leve",
      distance: 8,
      detail: "35 minutos em zona 2",
    },
    {
      day: "Terça",
      title: "Intervalado",
      distance: 10.5,
      detail: "6x400m com 90s recuperação",
    },
    {
      day: "Quarta",
      title: "Recuperativo",
      distance: 4.8,
      detail: "Pace confortável",
    },
    {
      day: "Quinta",
      title: "Tempo run",
      distance: 6.7,
      detail: "20 min em ritmo moderado",
    },
    { day: "Sexta", title: "Descanso", distance: 0, detail: "Mobilidade" },
    {
      day: "Sábado",
      title: "Longão",
      distance: 14.8,
      detail: "Ritmo confortável",
    },
    { day: "Domingo", title: "Off", distance: 0, detail: "Recuperação" },
  ],
  diets: [
    {
      day: "Segunda",
      calories: 2350,
      protein: 176,
      carbs: 264,
      fat: 65,
      water: 2.4,
      meals: [
        {
          time: "07:30",
          name: "Café da manhã",
          desc: "Ovos, aveia, banana e café sem açúcar.",
        },
        {
          time: "12:30",
          name: "Almoço",
          desc: "Arroz, feijão, frango grelhado e salada.",
        },
        {
          time: "16:30",
          name: "Pré-treino",
          desc: "Iogurte, granola e uma fruta.",
        },
        {
          time: "20:30",
          name: "Jantar",
          desc: "Batata doce, carne magra e legumes.",
        },
      ],
    },
    {
      day: "Terça",
      calories: 2450,
      protein: 180,
      carbs: 285,
      fat: 68,
      water: 2.6,
      meals: [
        {
          time: "07:00",
          name: "Café da manhã",
          desc: "Panqueca de aveia com banana.",
        },
        {
          time: "12:20",
          name: "Almoço",
          desc: "Macarrão, carne moída magra e legumes.",
        },
        { time: "16:00", name: "Lanche", desc: "Whey, fruta e castanhas." },
        { time: "20:15", name: "Jantar", desc: "Arroz, frango e salada." },
      ],
    },
  ],
  metrics: {
    weight: 76.4,
    fat: 14.2,
    sleep: "7h 32m",
    sleepQuality: 85,
    steps: 8642,
    heartRate: 62,
  },
  habits: [
    {
      name: "Treinar",
      icon: "dumbbell",
      days: [true, true, true, false, false, true, false],
    },
    {
      name: "Correr",
      icon: "person-standing",
      days: [true, true, true, true, true, true, false],
    },
    {
      name: "Beber água",
      icon: "droplet",
      days: [true, true, true, true, true, true, true],
    },
    {
      name: "Dormir cedo",
      icon: "moon",
      days: [false, true, true, true, true, false, false],
    },
    {
      name: "Ler",
      icon: "book-open",
      days: [false, true, true, false, false, false, false],
    },
  ],
  habitStreak: {
    count: 0,
    lastDate: getTodayKey(),
  },
  settings: {
    currentView: "dashboard",
    lightMode: false,
    selectedCalendarDate: getTodayKey(),
    visibleCalendarDate: getTodayKey(),
    miniCalendarDate: getTodayKey(),
  },
};

// Objeto central que guarda tudo que precisa persistir no Dashboard.
let dashboardData = loadData();
let state = dashboardData;
let currentView = state.settings.currentView || "dashboard";
let navigateToView = () => {};
let visibleCalendarDate = dateFromKey(
  state.settings.visibleCalendarDate || getTodayKey(),
);
let selectedCalendarDate = dateFromKey(
  state.settings.selectedCalendarDate || getTodayKey(),
);
let miniCalendarDate = dateFromKey(
  state.settings.miniCalendarDate || getTodayKey(),
);
let academyEditDay = state.settings.academyEditDay || state.activeDay || getTodayName();
normalizeHabits();
normalizeCalendarDay();

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData() {
  try {
    // Carrega o localStorage e mescla com os padrões para evitar campos antigos quebrados.
    return mergeState(
      clone(defaultState),
      JSON.parse(localStorage.getItem(STORAGE_KEY)),
    );
  } catch {
    return clone(defaultState);
  }
}

function getTodayName() {
  const jsDay = new Date().getDay();
  return dayNames[jsDay === 0 ? 6 : jsDay - 1];
}

function formatShortDate(date = new Date()) {
  const month = monthNames[date.getMonth()].slice(0, 3);
  return `${date.getDate()} ${month}, ${date.getFullYear()}`;
}

function greetingByTime(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

function dashboardGreeting() {
  return `${greetingByTime()}, ${state.profile.name}! 👋`;
}

function recentDateLabels() {
  return [27, 20, 13, 6, 0]
    .map((daysAgo) => {
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      return `${date.getDate()} ${monthNames[date.getMonth()].slice(0, 3)}`;
    })
    .map((label) => `<span>${label}</span>`)
    .join("");
}

function getTodayKey() {
  return dateKey(new Date());
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(key) {
  return new Date(`${key}T12:00:00`);
}

function dayIndexFromDate(date) {
  const jsDay = date.getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
}

function daysBetween(startKey, endKey) {
  const dayMs = 24 * 60 * 60 * 1000;
  return Math.round((dateFromKey(endKey) - dateFromKey(startKey)) / dayMs);
}

function activeDayIndex() {
  const index = dayNames.indexOf(state.activeDay);
  return index >= 0 ? index : 0;
}

function habitDayCompleted(dayIndex) {
  return (
    state.habits.length > 0 &&
    state.habits.every((habit) => habit.days[dayIndex])
  );
}

function clearHabitDay(dayIndex) {
  state.habits.forEach((habit) => {
    habit.days[dayIndex] = false;
  });
}

function syncActiveDayWithToday() {
  const todayName = getTodayName();
  if (state.activeDay !== todayName) {
    state.activeDay = todayName;
    ensureDiet(state.activeDay);
    return true;
  }
  return false;
}

function normalizeCalendarDay() {
  const todayKey = getTodayKey();
  state.habitStreak = state.habitStreak || { count: 0, lastDate: todayKey };
  const activeDayChanged = syncActiveDayWithToday();

  if (state.lastCalendarDate !== todayKey) {
    const previousKey = state.lastCalendarDate || state.habitStreak.lastDate;

    if (previousKey && previousKey !== todayKey) {
      const previousDayIndex = dayIndexFromDate(dateFromKey(previousKey));
      const previousDayWasYesterday = daysBetween(previousKey, todayKey) === 1;
      state.habitStreak.count =
        previousDayWasYesterday && habitDayCompleted(previousDayIndex)
          ? moneylessNumber(state.habitStreak.count) + 1
          : 0;
      clearHabitDay(dayIndexFromDate(new Date()));
    }

    state.lastCalendarDate = todayKey;
    state.habitStreak.lastDate = todayKey;
    syncDashboardSettings();
    saveData();
  } else if (activeDayChanged) {
    syncDashboardSettings();
    saveData();
  }
}

function normalizeHabits() {
  let changed = false;
  state.habits.forEach((habit) => {
    if (!Array.isArray(habit.days)) {
      habit.days = [false, false, false, false, false, false, false];
      changed = true;
    }

    while (habit.days.length < 7) {
      habit.days.push(false);
      changed = true;
    }

    if (habit.days.length > 7) {
      habit.days = habit.days.slice(0, 7);
      changed = true;
    }
  });

  if (changed) saveData();
}

function mergeState(base, saved) {
  if (!saved || typeof saved !== "object") return base;
  return {
    ...base,
    ...saved,
    profile: { ...base.profile, ...(saved.profile || {}) },
    metrics: { ...base.metrics, ...(saved.metrics || {}) },
    habitStreak: { ...base.habitStreak, ...(saved.habitStreak || {}) },
    workouts: saved.workouts || base.workouts,
    runs: saved.runs || base.runs,
    diets: saved.diets || base.diets,
    habits: saved.habits || base.habits,
    settings: { ...base.settings, ...(saved.settings || {}) },
  };
}

function syncDashboardSettings() {
  // Mantém as configurações visuais junto dos dados editáveis.
  const hasBody = Boolean(document.body);
  state.settings = {
    ...(state.settings || {}),
    currentView,
    lightMode: hasBody
      ? document.body.classList.contains("light-mode")
      : Boolean(state.settings?.lightMode),
    selectedCalendarDate: dateKey(selectedCalendarDate),
    visibleCalendarDate: dateKey(visibleCalendarDate),
    miniCalendarDate: dateKey(miniCalendarDate),
    academyEditDay,
  };
}

function saveData() {
  // Salva automaticamente hábitos, métricas, treinos, calendário e preferências.
  dashboardData = state;
  syncDashboardSettings();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dashboardData));
}

function updateDashboard() {
  // Atualiza a interface e garante que qualquer alteração vá para o localStorage.
  saveData();
  renderDashboard();
}

function resetDashboard() {
  // Restaura o estado inicial, salva a nova base e redesenha a tela.
  dashboardData = clone(defaultState);
  state = dashboardData;
  currentView = state.settings.currentView;
  selectedCalendarDate = dateFromKey(state.settings.selectedCalendarDate);
  visibleCalendarDate = dateFromKey(state.settings.visibleCalendarDate);
  miniCalendarDate = dateFromKey(state.settings.miniCalendarDate);
  academyEditDay = state.settings.academyEditDay || state.activeDay;
  document.body.classList.toggle("light-mode", state.settings.lightMode);
  saveData();
  updateDashboard();
}

function saveState() {
  saveData();
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "stroke-width": 2 } });
  }
}

function moneylessNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function byDay(collection, day = state.activeDay) {
  return collection.find((item) => item.day === day) || collection[0];
}

function dayNameFromDate(date) {
  return dayNames[dayIndexFromDate(date)];
}

function nextDay(day) {
  const index = dayNames.indexOf(day);
  return dayNames[(index + 1) % dayNames.length];
}

function dateForDay(dayName) {
  const today = new Date();
  const currentIndex = activeDayIndex();
  const targetIndex = dayNames.indexOf(dayName);
  const offset = (targetIndex < 0 ? currentIndex : targetIndex) - currentIndex;
  const date = new Date(today);
  date.setDate(today.getDate() + offset);
  return date;
}

function exerciseIconName(exerciseName = "") {
  // Resolve um ícone Lucide a partir de palavras-chave no nome do exercício.
  const name = exerciseName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const iconMap = [
    { terms: ["corrida", "correr", "run", "cardio"], icon: "activity" },
    { terms: ["agachamento", "squat"], icon: "accessibility" },
    {
      terms: ["elevacao", "lateral", "mobilidade", "caminhada"],
      icon: "activity",
    },
    {
      terms: [
        "supino",
        "desenvolvimento",
        "triceps",
        "remada",
        "terra",
        "puxada",
        "rosca",
        "stiff",
      ],
      icon: "dumbbell",
    },
  ];

  return (
    iconMap.find((group) => group.terms.some((term) => name.includes(term)))
      ?.icon || "dumbbell"
  );
}

function renderCalendarHTML() {
  // Monta a grade do mês visível; ela pode ir para meses passados ou futuros.
  const today = new Date();
  const year = visibleCalendarDate.getFullYear();
  const month = visibleCalendarDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const firstGridOffset = (firstOfMonth.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - firstGridOffset);
  const days = [];

  for (let index = 0; index < 35; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const tag = date.getMonth() === month ? "b" : "em";
    const isToday = date.toDateString() === today.toDateString();
    const isSelected = dateKey(date) === dateKey(selectedCalendarDate);
    const isPastOrToday = date <= today;
    const classes = [
      isToday ? "today" : "",
      isSelected ? "selected" : "",
      isPastOrToday && date.getMonth() === month ? "done" : "",
    ]
      .filter(Boolean)
      .join(" ");
    days.push(
      `<${tag} class="${classes}" data-date="${dateKey(date)}">${date.getDate()}</${tag}>`,
    );
  }

  return `
    <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
    ${days.join("")}
  `;
}

function calendarDatesForMonth(baseDate) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const firstGridOffset = (firstOfMonth.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - firstGridOffset);

  return Array.from({ length: 35 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
}

function renderMiniCalendar() {
  const picker = document.querySelector(".mini-calendar");
  if (!picker) return;

  const today = new Date();
  const monthLabel = `${monthNames[miniCalendarDate.getMonth()]} ${miniCalendarDate.getFullYear()}`;
  const days = calendarDatesForMonth(miniCalendarDate)
    .map((date) => {
      const classes = [
        date.getMonth() !== miniCalendarDate.getMonth() ? "outside" : "",
        date.toDateString() === today.toDateString() ? "today" : "",
        dateKey(date) === dateKey(selectedCalendarDate) ? "selected" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `<button class="${classes}" type="button" data-date="${dateKey(date)}">${date.getDate()}</button>`;
    })
    .join("");

  picker.innerHTML = `
    <div class="mini-calendar-head">
      <strong>${monthLabel}</strong>
      <div>
        <button class="mini-calendar-prev" type="button" aria-label="Mês anterior"><i data-lucide="chevron-left"></i></button>
        <button class="mini-calendar-next" type="button" aria-label="Próximo mês"><i data-lucide="chevron-right"></i></button>
      </div>
    </div>
    <div class="mini-calendar-grid">
      ${shortDays.map((day) => `<span>${day[0]}</span>`).join("")}
      ${days}
    </div>
  `;

  renderIcons();
  bindMiniCalendarEvents();
}

function ensureDiet(day) {
  let diet = state.diets.find((item) => item.day === day);
  if (!diet) {
    diet = { ...clone(state.diets[0]), day };
    state.diets.push(diet);
  }
  return diet;
}

function calendarPreviewHTML(date = selectedCalendarDate) {
  const day = dayNameFromDate(date);
  const workout = byDay(state.workouts, day);
  const run = byDay(state.runs, day);
  const diet = ensureDiet(day);
  const plannedHabits = state.habits.map((habit) => habit.name).filter(Boolean);
  const hasWorkout = workout?.exercises?.length;
  const hasRun = moneylessNumber(run?.distance) > 0;
  const hasDiet = diet?.meals?.length;
  const hasHabits = plannedHabits.length;

  if (!hasWorkout && !hasRun && !hasDiet && !hasHabits) {
    return `
      <div class="calendar-preview empty-state">
        <i data-lucide="calendar-x"></i>
        <div>
          <strong>Nada planejado</strong>
          <p>Sem treino, corrida, dieta ou hábitos para ${day}.</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="calendar-preview">
      <div class="preview-head">
        <span>${formatShortDate(date)}</span>
        <strong>${day}</strong>
      </div>
      <div class="preview-grid">
        <div class="preview-item">
          <i data-lucide="dumbbell"></i>
          <div><strong>${workout?.split || "Sem treino"}</strong><p>${workout?.exercises?.[0]?.name || "Nenhum exercício planejado"}</p></div>
        </div>
        <div class="preview-item">
          <i data-lucide="activity"></i>
          <div><strong>${hasRun ? `${run.distance} km` : "Sem corrida"}</strong><p>${run?.title || "Descanso"}</p></div>
        </div>
        <div class="preview-item">
          <i data-lucide="shopping-basket"></i>
          <div><strong>${hasDiet ? `${Number(diet.calories).toLocaleString("en-US")} kcal` : "Sem dieta"}</strong><p>${diet?.meals?.[0]?.name || "Sem refeição cadastrada"}</p></div>
        </div>
        <div class="preview-item">
          <i data-lucide="sparkles"></i>
          <div><strong>${plannedHabits.length} hábitos</strong><p>${plannedHabits.slice(0, 3).join(", ") || "Nenhum hábito planejado"}</p></div>
        </div>
      </div>
    </div>
  `;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setHTML(selector, html) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
}

function exerciseRows(exercises, compact = false) {
  return exercises
    .map(
      (exercise) => `
        <div class="exercise-row">
          <div class="exercise-img"><i data-lucide="${exerciseIconName(exercise.name)}"></i></div>
          <div>
            <strong>${exercise.name || "Exercício"}</strong>
            <p>${exercise.detail || "Séries e repetições"}</p>
          </div>
          ${compact ? "" : `<span>${exercise.load || "-"}</span>`}
        </div>
      `,
    )
    .join("");
}

function sparklineMarkup(values) {
  const width = 170;
  const height = 48;
  const padding = 5;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (width - padding * 2) / (values.length - 1);
  const points = values.map((value, index) => {
    const x = padding + index * step;
    const y =
      height - padding - ((value - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const linePath = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`,
    )
    .join(" ");
  const areaPath = `${linePath} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;
  const dots = points
    .map(
      (point, index) =>
        `<circle class="${index === points.length - 1 ? "spark-last" : "spark-dot"}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === points.length - 1 ? 3.6 : 2.4}" />`,
    )
    .join("");

  return `
    <path class="spark-grid" d="M ${padding} 14 H ${width - padding} M ${padding} 31 H ${width - padding}" />
    <path class="spark-area" d="${areaPath}" />
    <path class="spark-line" d="${linePath}" />
    <g>${dots}</g>
  `;
}

function derivedSeries(current, offsets) {
  return offsets.map((offset) =>
    Number((moneylessNumber(current) + offset).toFixed(1)),
  );
}

function workoutSeries() {
  return state.workouts.map((workout) => {
    const rest = /descanso|off/i.test(workout.split);
    return rest ? 0 : Math.max(1, workout.exercises.length);
  });
}

function renderStatSparklines() {
  const runValues = state.runs.map((run) => moneylessNumber(run.distance));
  const series = [
    workoutSeries(),
    runValues,
    derivedSeries(state.metrics.weight, [2.4, 1.9, 1.4, 1.1, 0.7, 0.3, 0]),
    derivedSeries(state.metrics.fat, [1.1, 0.9, 0.7, 0.5, 0.35, 0.15, 0]),
  ];

  document.querySelectorAll(".stats-grid .sparkline").forEach((svg, index) => {
    svg.innerHTML = sparklineMarkup(series[index]);
  });
}

function chartLineMarkup(values, width = 330, height = 165, padding = 26) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (width - padding * 2) / (values.length - 1);
  const gridStart = padding + 8;
  const gridEnd = width - 10;
  const gridRows = [0.15, 0.38, 0.61, 0.84]
    .map((ratio) => {
      const y = height * ratio;
      return `M${gridStart} ${y.toFixed(1)} H${gridEnd}`;
    })
    .join(" ");
  const points = values.map((value, index) => ({
    x: padding + index * step,
    y: height - padding - ((value - min) / range) * (height - padding * 2),
  }));
  const linePath = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`,
    )
    .join(" ");
  const areaPath = `${linePath} L${width - padding} ${height - padding} L${padding} ${height - padding} Z`;
  const labels = [max, min + range * 0.66, min + range * 0.33, min].map(
    (value) => value.toFixed(1),
  );

  return `
    <g class="grid-lines"><path d="${gridRows}" /></g>
    <g class="axis">
      <text x="4" y="${(height * 0.15 + 4).toFixed(1)}">${labels[0]}</text>
      <text x="4" y="${(height * 0.38 + 4).toFixed(1)}">${labels[1]}</text>
      <text x="4" y="${(height * 0.61 + 4).toFixed(1)}">${labels[2]}</text>
      <text x="4" y="${(height * 0.84 + 4).toFixed(1)}">${labels[3]}</text>
    </g>
    <path class="chart-area" d="${areaPath}" />
    <path class="chart-line" d="${linePath}" />
    <g class="chart-dots">${points.map((point) => `<circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="3" />`).join("")}</g>
  `;
}

function renderProgressChart() {
  const values = derivedSeries(
    state.metrics.weight,
    [2.8, 2.1, 1.6, 1.2, 0.8, 0.3, 0],
  );
  setHTML(".progress-card .line-chart svg", chartLineMarkup(values));
}

function renderNutritionChart(diet) {
  const carbsCalories = moneylessNumber(diet.carbs) * 4;
  const proteinCalories = moneylessNumber(diet.protein) * 4;
  const fatCalories = moneylessNumber(diet.fat) * 9;
  const macroCalories = Math.max(
    carbsCalories + proteinCalories + fatCalories,
    1,
  );
  const carbsPct = Math.round((carbsCalories * 100) / macroCalories);
  const proteinPct = Math.round((proteinCalories * 100) / macroCalories);
  const fatPct = Math.max(0, 100 - carbsPct - proteinPct);
  const donut = document.querySelector(".nutrition-card .donut");
  if (donut) {
    donut.style.background = `conic-gradient(#6ade75 0 ${carbsPct}%, #29b767 ${carbsPct}% ${carbsPct + proteinPct}%, #3b4652 ${carbsPct + proteinPct}% 100%)`;
  }

  return { carbsPct, proteinPct, fatPct };
}

function renderMiniWidgetCharts(diet) {
  const sleepQuality = moneylessNumber(state.metrics.sleepQuality);
  const heartRate = moneylessNumber(state.metrics.heartRate);
  const waterPct = Math.min(
    100,
    Math.round((moneylessNumber(diet.water) / 3) * 100),
  );
  const stepsPct = Math.min(
    100,
    Math.round((moneylessNumber(state.metrics.steps) / 10000) * 100),
  );

  setHTML(
    ".mini-widget:nth-child(1) > svg:last-child",
    `<path d="${miniLinePath(derivedSeries(sleepQuality, [-14, -8, -10, -4, -6, 0, 2]), 72, 30)}" />`,
  );
  setHTML(
    ".mini-widget:nth-child(4) > svg:last-child",
    `<path d="${miniLinePath(derivedSeries(heartRate, [5, 2, 3, -1, 1, -2, 0]), 72, 30)}" />`,
  );

  document.querySelectorAll(".ring-widget b").forEach((ring, index) => {
    const pct = index === 0 ? waterPct : stepsPct;
    ring.style.background = `radial-gradient(circle, #17202a 0 54%, transparent 56%), conic-gradient(var(--green) 0 ${pct}%, #3b4651 ${pct}% 100%)`;
  });
}

function miniLinePath(values, width, height) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = width / (values.length - 1);
  return values
    .map((value, index) => {
      const x = index * step;
      const y = height - 4 - ((value - min) / range) * (height - 8);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function currentStreakDays() {
  const todayIndex = dayIndexFromDate(new Date());
  const completedToday = habitDayCompleted(todayIndex) ? 1 : 0;
  return moneylessNumber(state.habitStreak?.count) + completedToday;
}

function renderStreakChart() {
  const cumulative = state.habits[0]?.days.map(
    (_, dayIndex) =>
      state.habits.filter((habit) => habit.days[dayIndex]).length,
  ) || [0, 0, 0, 0, 0, 0, 0];
  const streak = currentStreakDays();
  setHTML(
    ".streak-card strong",
    `${streak} <small>${streak === 1 ? "dia" : "dias"}</small>`,
  );
  setHTML(
    ".streak-card svg",
    `
    <path class="area" d="${miniLinePath(cumulative, 154, 50)} L154 58 L0 58 Z" />
    <path class="line" d="${miniLinePath(cumulative, 154, 50)}" />
    <g class="dots">${cumulative.map((value, index) => `<circle cx="${(index * (154 / (cumulative.length - 1))).toFixed(1)}" cy="${(50 - 4 - ((value - Math.min(...cumulative)) / (Math.max(...cumulative) - Math.min(...cumulative) || 1)) * 42).toFixed(1)}" r="3" />`).join("")}</g>
  `,
  );
}

function habitTable() {
  return `
    <span></span>${["S", "T", "Q", "Q", "S", "S", "D"].map((day) => `<span>${day}</span>`).join("")}
    ${state.habits
      .map(
        (habit, habitIndex) => `
          <p><i data-lucide="${habit.icon}"></i>${habit.name}</p>
          ${habit.days.map((done, dayIndex) => `<b class="${done ? "" : "off"}" data-action="dashboard-habit" data-habit="${habitIndex}" data-day="${dayIndex}"></b>`).join("")}
        `,
      )
      .join("")}
  `;
}

function renderProfile() {
  setText(".profile h3", state.profile.name);
  setText(".profile p", state.profile.tagline);
}

function renderDashboard() {
  if (syncActiveDayWithToday()) {
    saveData();
  }
  renderProfile();

  if (currentView === "dashboard") {
    setText(".topbar h1", dashboardGreeting());
    setText(".topbar p", "Vamos continuar evoluindo hoje.");
  }

  const workout = byDay(state.workouts);
  const nextWorkout = byDay(state.workouts, nextDay(state.activeDay));
  const run = byDay(state.runs);
  const diet = ensureDiet(state.activeDay);
  const today = new Date();
  const weekRun = state.runs.reduce(
    (sum, item) => sum + moneylessNumber(item.distance),
    0,
  );
  const workoutCount = workoutSeries().filter((value) => value > 0).length;
  const weightValues = derivedSeries(
    state.metrics.weight,
    [2.8, 2.1, 1.6, 1.2, 0.8, 0.3, 0],
  );
  const weightDelta = weightValues.at(-1) - weightValues.at(-2);

  setHTML(
    ".date-btn",
    `<i data-lucide="calendar-days"></i>${formatShortDate(today)}<i data-lucide="chevron-down"></i>`,
  );
  setText(".stats-grid .stat-card:nth-child(1) strong", workoutCount);
  setText(
    ".stats-grid .stat-card:nth-child(2) strong",
    `${weekRun.toFixed(1)} km`,
  );
  setText(
    ".stats-grid .stat-card:nth-child(3) strong",
    `${state.metrics.weight} kg`,
  );
  setText(
    ".stats-grid .stat-card:nth-child(4) strong",
    `${state.metrics.fat}%`,
  );
  renderStatSparklines();
  setHTML(
    ".progress-card .metric-line",
    `<strong>${state.metrics.weight}</strong> kg <span>${weightDelta.toFixed(1)} kg</span>`,
  );
  renderProgressChart();
  setHTML(".progress-card .x-axis", recentDateLabels());

  setHTML(
    ".workout-card .card-title h2",
    `Treino de ${state.activeDay} <span>${workout.split}</span>`,
  );
  setHTML(
    ".workout-card .exercise-list",
    exerciseRows(workout.exercises.slice(0, 4)),
  );
  setHTML(
    ".workout-card .start-btn",
    `<i data-lucide="${state.workoutStarted ? "pause" : "play"}"></i>${state.workoutStarted ? "Treino em andamento" : "Iniciar treino"}`,
  );

  setHTML(
    ".next-card .card-title h2",
    `Próximo treino <span>${nextWorkout.split}</span>`,
  );
  setHTML(
    ".next-card .date-chip",
    `<i data-lucide="calendar-days"></i>${formatShortDate(dateForDay(nextWorkout.day))}<i data-lucide="chevron-down"></i>`,
  );
  setHTML(
    ".next-card .exercise-list",
    exerciseRows(nextWorkout.exercises.slice(0, 4), true),
  );

  setHTML(".run-card .card-title h2", "Corrida");
  setHTML(
    ".run-card .card-title .filter-btn",
    `${state.activeDay}<i data-lucide="chevron-down"></i>`,
  );
  setHTML(
    ".run-card .metric-line",
    `<strong>${run.distance || 0}</strong> km <span>${run.title}</span>`,
  );
  setHTML(
    ".run-card .bar-chart",
    state.runs
      .map((item) => {
        const height = Math.max(
          12,
          Math.min(92, moneylessNumber(item.distance) * 6),
        );
        const empty = item.distance ? "" : " empty";
        return `<span class="${empty}" style="height: ${height}%"><em>${shortDays[dayNames.indexOf(item.day)]}</em></span>`;
      })
      .join(""),
  );

  setHTML(
    ".nutrition-card .card-title h2",
    `Nutrição <span>${diet.day}</span>`,
  );
  setText(
    ".nutrition-card .calories strong",
    Number(diet.calories).toLocaleString("en-US"),
  );
  const macros = renderNutritionChart(diet);
  setHTML(
    ".nutrition-card .macro-list",
    `
    <p><i></i>Carboidratos <span>${macros.carbsPct}%</span></p>
    <p><i></i>Proteínas <span>${macros.proteinPct}%</span></p>
    <p><i></i>Gorduras <span>${macros.fatPct}%</span></p>
  `,
  );

  setText(".mini-widget:nth-child(1) strong", state.metrics.sleep);
  setText(
    ".mini-widget:nth-child(1) small",
    `Qualidade: ${state.metrics.sleepQuality}%`,
  );
  setText(".mini-widget:nth-child(2) strong", `${diet.water} L`);
  setText(
    ".mini-widget:nth-child(3) strong",
    Number(state.metrics.steps).toLocaleString("en-US"),
  );
  setText(".mini-widget:nth-child(4) strong", `${state.metrics.heartRate} bpm`);
  renderMiniWidgetCharts(diet);

  setText(
    ".calendar-card .month-control strong",
    `${monthNames[visibleCalendarDate.getMonth()]} ${visibleCalendarDate.getFullYear()}`,
  );
  setHTML(".calendar-card .calendar-grid", renderCalendarHTML());
  setHTML(".calendar-card .calendar-preview", calendarPreviewHTML());

  setHTML(".habits-card .habit-table", habitTable());
  const dayIndex = activeDayIndex();
  const completedToday = state.habits.filter(
    (habit) => habit.days[dayIndex],
  ).length;
  const pct = Math.round(
    (completedToday / Math.max(state.habits.length, 1)) * 100,
  );
  setText(
    ".habits-card .habit-summary span",
    `${completedToday} de ${state.habits.length} hábitos concluídos em ${state.activeDay}`,
  );
  setText(".habits-card .habit-summary strong", `${pct}%`);
  const progress = document.querySelector(".habits-card .progress-track span");
  if (progress) progress.style.width = `${pct}%`;
  renderStreakChart();
  renderIcons();
  setupDashboardInteractions();
}

function setupDashboardInteractions() {
  const bindClick = (selector, handler) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.onclick = handler;
    });
  };

  bindClick(".date-btn", (event) => {
    event.stopPropagation();
    const picker = document.querySelector(".mini-calendar");
    if (!picker) return;
    picker.hidden = !picker.hidden;
    renderMiniCalendar();
  });
  bindClick(".top-actions button[aria-label='Pesquisar']", () =>
    navigateToView("anotacoes"),
  );
  bindClick(".top-actions button[aria-label='Notificações']", () =>
    navigateToView("relatorios"),
  );
  bindClick(".calendar-prev", (event) => {
    event.stopPropagation();
    visibleCalendarDate.setMonth(visibleCalendarDate.getMonth() - 1);
    updateDashboard();
  });
  bindClick(".calendar-next", (event) => {
    event.stopPropagation();
    visibleCalendarDate.setMonth(visibleCalendarDate.getMonth() + 1);
    updateDashboard();
  });
  bindClick(".workout-card .start-btn", () => {
    state.workoutStarted = !state.workoutStarted;
    saveState();
    renderDashboard();
  });

  bindClick(
    ".workout-card .card-title button, .next-card, .stats-grid .stat-card:nth-child(1)",
    () => navigateToView("academia"),
  );
  bindClick(".run-card, .stats-grid .stat-card:nth-child(2)", () =>
    navigateToView("corrida"),
  );
  bindClick(
    ".progress-card, .stats-grid .stat-card:nth-child(3), .stats-grid .stat-card:nth-child(4), .mini-widget:nth-child(1), .mini-widget:nth-child(3), .mini-widget:nth-child(4)",
    () => navigateToView("evolucao"),
  );
  bindClick(".nutrition-card, .mini-widget:nth-child(2)", () =>
    navigateToView("dieta"),
  );
  bindClick(".habits-card .text-btn", () => navigateToView("habitos"));

  document
    .querySelectorAll(".habits-card [data-action='dashboard-habit']")
    .forEach((dot) => {
      dot.onclick = (event) => {
        event.stopPropagation();
        const habit = state.habits[dot.dataset.habit];
        if (!habit) return;
        habit.days[dot.dataset.day] = !habit.days[dot.dataset.day];
        saveState();
        renderDashboard();
      };
    });

  bindCalendarDayEvents();
}

function bindCalendarDayEvents() {
  document.querySelectorAll(".calendar-grid [data-date]").forEach((day) => {
    day.onclick = (event) => {
      event.stopPropagation();
      selectedCalendarDate = new Date(`${day.dataset.date}T12:00:00`);
      saveState();
      setHTML(".calendar-card .calendar-grid", renderCalendarHTML());
      setHTML(".calendar-card .calendar-preview", calendarPreviewHTML());
      renderIcons();
      bindCalendarDayEvents();
    };
  });
}

function bindMiniCalendarEvents() {
  const picker = document.querySelector(".mini-calendar");
  if (!picker) return;

  picker
    .querySelector(".mini-calendar-prev")
    ?.addEventListener("click", (event) => {
      event.stopPropagation();
      miniCalendarDate.setMonth(miniCalendarDate.getMonth() - 1);
      renderMiniCalendar();
    });

  picker
    .querySelector(".mini-calendar-next")
    ?.addEventListener("click", (event) => {
      event.stopPropagation();
      miniCalendarDate.setMonth(miniCalendarDate.getMonth() + 1);
      renderMiniCalendar();
    });

  picker.querySelectorAll("[data-date]").forEach((dayButton) => {
    dayButton.addEventListener("click", (event) => {
      event.stopPropagation();
      selectedCalendarDate = new Date(`${dayButton.dataset.date}T12:00:00`);
      miniCalendarDate = new Date(selectedCalendarDate);
      visibleCalendarDate = new Date(selectedCalendarDate);
      saveState();
      renderDashboard();
      renderMiniCalendar();
      picker.hidden = true;
    });
  });
}

function setupTopDatePicker() {
  const dateButton = document.querySelector(".date-btn");
  if (
    !dateButton ||
    dateButton.parentElement?.classList.contains("date-picker-wrap")
  )
    return;

  const wrapper = document.createElement("div");
  wrapper.className = "date-picker-wrap";
  dateButton.parentNode.insertBefore(wrapper, dateButton);
  wrapper.appendChild(dateButton);
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="mini-calendar" hidden></div>`,
  );

  document.addEventListener("click", (event) => {
    const picker = document.querySelector(".mini-calendar");
    if (picker && !wrapper.contains(event.target)) picker.hidden = true;
  });
}

const viewMeta = {
  dashboard: { title: "", subtitle: "Vamos continuar evoluindo hoje." },
  hoje: {
    title: "Hoje",
    subtitle: "Escolha o dia ativo que alimenta o Dashboard.",
  },
  academia: {
    title: "Academia",
    subtitle: "Edite divisões, exercícios e cargas por dia.",
  },
  corrida: {
    title: "Corrida",
    subtitle: "Edite treino e distância por dia da semana.",
  },
  dieta: {
    title: "Dieta",
    subtitle: "Edite refeições e macros por dia exato.",
  },
  habitos: {
    title: "Hábitos",
    subtitle: "Consistência semanal e rotinas fundamentais.",
  },
  evolucao: {
    title: "Evolução",
    subtitle: "Edite seus indicadores físicos principais.",
  },
  relatorios: {
    title: "Relatórios",
    subtitle: "Resumo consolidado dos dados atuais.",
  },
  metas: {
    title: "Metas",
    subtitle: "Objetivos atuais e progresso até a próxima marca.",
  },
  anotacoes: {
    title: "Perfil e anotações",
    subtitle: "Edite nome, frase e observações pessoais.",
  },
};

function dayOptions(selected) {
  return dayNames
    .map(
      (day) =>
        `<option value="${day}" ${day === selected ? "selected" : ""}>${day}</option>`,
    )
    .join("");
}

function customDaySelect(label = "Dia", selected = state.activeDay, scope = "active") {
  return `
    <div class="edit-field">
      <span>${label}</span>
      <div class="custom-select" data-custom-day-select data-scope="${scope}">
        <button class="custom-select-toggle" type="button">
          <span>${selected}</span>
          <i data-lucide="chevron-down"></i>
        </button>
        <div class="custom-select-menu" hidden>
          ${dayNames.map((day) => `<button class="custom-select-option ${day === selected ? "active" : ""}" type="button" data-day="${day}">${day}</button>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function inputField(label, value, attrs) {
  return `<label class="edit-field"><span>${label}</span><input value="${value ?? ""}" ${attrs || ""}></label>`;
}

function textAreaField(label, value, attrs) {
  return `<label class="edit-field"><span>${label}</span><textarea ${attrs || ""}>${value ?? ""}</textarea></label>`;
}

function renderHoje() {
  syncActiveDayWithToday();
  const workout = byDay(state.workouts);
  const run = byDay(state.runs);
  const diet = ensureDiet(state.activeDay);
  return `
    <section class="module-grid">
      <article class="card module-card full">
        <div class="card-title"><h2>Dia ativo no Dashboard</h2></div>
        <div class="editor-grid">
          <div class="module-kpi"><span>Dia automático</span><strong>${state.activeDay}</strong></div>
          <div class="module-kpi"><span>Treino</span><strong>${workout.split}</strong></div>
          <div class="module-kpi"><span>Corrida</span><strong>${run.distance} km</strong></div>
          <div class="module-kpi"><span>Dieta</span><strong>${Number(diet.calories).toLocaleString("en-US")}</strong></div>
        </div>
      </article>
      <article class="card module-card wide">
        <div class="card-title"><h2>Resumo do dia</h2></div>
        <div class="module-list">
          <div class="module-item"><i data-lucide="dumbbell"></i><div><strong>${workout.split}</strong><p>${workout.exercises[0]?.name || "Sem exercício cadastrado"}</p></div><span>${state.activeDay}</span></div>
          <div class="module-item"><i data-lucide="person-standing"></i><div><strong>${run.title}</strong><p>${run.detail}</p></div><span>${run.distance} km</span></div>
          <div class="module-item"><i data-lucide="shopping-basket"></i><div><strong>${diet.meals[0]?.name || "Refeição"}</strong><p>${diet.meals[0]?.desc || "Sem descrição"}</p></div><span>${diet.calories} kcal</span></div>
        </div>
      </article>
    </section>
  `;
}

function renderAcademia() {
  const selectedWorkoutIndex = state.workouts.findIndex((workout) => workout.day === academyEditDay);
  const workoutIndex = selectedWorkoutIndex >= 0 ? selectedWorkoutIndex : 0;
  const workout = state.workouts[workoutIndex];
  return `
    <section class="module-grid">
      <article class="card module-card full">
        <div class="card-title"><h2>Divisões de treino</h2><button class="text-btn" type="button" data-action="add-exercise">Adicionar exercício</button></div>
        <div class="compact-field">${customDaySelect("Dia para editar", academyEditDay, "academy")}</div>
        <div class="editor-panel">
          <div class="editor-row">
            <strong>${workout.day}</strong>
            <input value="${workout.split}" data-bind="workouts.${workoutIndex}.split" aria-label="Divisão de ${workout.day}">
          </div>
          <div class="editable-list">
            ${workout.exercises
              .map(
                (exercise, exerciseIndex) => `
                  <div class="editable-row">
                    <input value="${exercise.name}" data-bind="workouts.${workoutIndex}.exercises.${exerciseIndex}.name" aria-label="Nome do exercício">
                    <input value="${exercise.detail}" data-bind="workouts.${workoutIndex}.exercises.${exerciseIndex}.detail" aria-label="Detalhes do exercício">
                    <input value="${exercise.load}" data-bind="workouts.${workoutIndex}.exercises.${exerciseIndex}.load" aria-label="Carga">
                    <button type="button" data-action="remove-exercise" data-workout="${workoutIndex}" data-exercise="${exerciseIndex}" aria-label="Remover exercício"><i data-lucide="trash-2"></i></button>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </article>
    </section>
  `;
}

function renderCorrida() {
  return `
    <section class="module-grid">
      <article class="card module-card full">
        <div class="card-title"><h2>Treinos de corrida</h2></div>
        <div class="editable-list">
          ${state.runs
            .map(
              (run, index) => `
                <div class="editable-row run-editor">
                  <strong>${run.day}</strong>
                  <input value="${run.title}" data-bind="runs.${index}.title" aria-label="Tipo de corrida">
                  <input type="number" step="0.1" value="${run.distance}" data-bind-number="runs.${index}.distance" aria-label="Distância">
                  <input value="${run.detail}" data-bind="runs.${index}.detail" aria-label="Detalhes">
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function renderDieta() {
  const diet = ensureDiet(state.activeDay);
  const dietIndex = state.diets.findIndex((item) => item.day === diet.day);
  return `
    <section class="module-grid">
      <article class="card module-card full">
        <div class="card-title"><h2>Dieta por dia</h2><button class="text-btn" type="button" data-action="add-meal">Adicionar refeição</button></div>
        <div class="editor-grid">
          ${customDaySelect("Dia")}
          ${inputField("Calorias", diet.calories, `type="number" data-bind-number="diets.${dietIndex}.calories"`)}
          ${inputField("Proteínas (g)", diet.protein, `type="number" data-bind-number="diets.${dietIndex}.protein"`)}
          ${inputField("Carboidratos (g)", diet.carbs, `type="number" data-bind-number="diets.${dietIndex}.carbs"`)}
          ${inputField("Gorduras (g)", diet.fat, `type="number" data-bind-number="diets.${dietIndex}.fat"`)}
          ${inputField("Água (L)", diet.water, `type="number" step="0.1" data-bind-number="diets.${dietIndex}.water"`)}
        </div>
      </article>
      <article class="card module-card full">
        <div class="card-title"><h2>Refeições de ${diet.day}</h2></div>
        <div class="meal-grid">
          ${diet.meals
            .map(
              (meal, mealIndex) => `
                <div class="meal-card editable-meal">
                  <input value="${meal.time}" data-bind="diets.${dietIndex}.meals.${mealIndex}.time" aria-label="Horário">
                  <input value="${meal.name}" data-bind="diets.${dietIndex}.meals.${mealIndex}.name" aria-label="Nome da refeição">
                  <textarea data-bind="diets.${dietIndex}.meals.${mealIndex}.desc" aria-label="Descrição">${meal.desc}</textarea>
                  <button type="button" data-action="remove-meal" data-diet="${dietIndex}" data-meal="${mealIndex}"><i data-lucide="trash-2"></i>Remover</button>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function renderHabitos() {
  return `
    <section class="module-grid">
      <article class="card module-card full">
        <div class="card-title"><h2>Hábitos editáveis</h2><button class="text-btn" type="button" data-action="add-habit">Adicionar hábito</button></div>
        <div class="habit-editor">
          <div></div>${shortDays.map((day) => `<span>${day}</span>`).join("")}<span></span>
          ${state.habits
            .map(
              (habit, habitIndex) => `
                <input value="${habit.name}" data-bind="habits.${habitIndex}.name" aria-label="Nome do hábito">
                ${habit.days
                  .map(
                    (done, dayIndex) => `
                      <label class="check-dot">
                        <input type="checkbox" ${done ? "checked" : ""} data-action="toggle-habit" data-habit="${habitIndex}" data-day="${dayIndex}">
                        <span></span>
                      </label>
                    `,
                  )
                  .join("")}
                <button type="button" data-action="remove-habit" data-habit="${habitIndex}" aria-label="Remover hábito"><i data-lucide="trash-2"></i></button>
              `,
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function renderEvolucao() {
  const weightValues = derivedSeries(
    state.metrics.weight,
    [2.8, 2.1, 1.6, 1.2, 0.8, 0.3, 0],
  );
  return `
    <section class="module-grid">
      <article class="card module-card full">
        <div class="card-title"><h2>Indicadores</h2></div>
        <div class="editor-grid">
          ${inputField("Peso atual (kg)", state.metrics.weight, `type="number" step="0.1" data-bind-number="metrics.weight"`)}
          ${inputField("% Gordura", state.metrics.fat, `type="number" step="0.1" data-bind-number="metrics.fat"`)}
          ${inputField("Sono", state.metrics.sleep, `data-bind="metrics.sleep"`)}
          ${inputField("Qualidade do sono (%)", state.metrics.sleepQuality, `type="number" data-bind-number="metrics.sleepQuality"`)}
          ${inputField("Passos", state.metrics.steps, `type="number" data-bind-number="metrics.steps"`)}
          ${inputField("Freq. card.", state.metrics.heartRate, `type="number" data-bind-number="metrics.heartRate"`)}
        </div>
      </article>
      <article class="card module-card full">
        <div class="card-title"><h2>Gráfico de peso</h2></div>
        <div class="chart-shell line-chart evolution-chart">
          <svg viewBox="0 0 760 220" aria-hidden="true">${chartLineMarkup(weightValues, 760, 220, 40)}</svg>
          <div class="x-axis">${recentDateLabels()}</div>
        </div>
      </article>
    </section>
  `;
}

function renderAnotacoes() {
  return `
    <section class="module-grid">
      <article class="card module-card full">
        <div class="card-title"><h2>Perfil</h2></div>
        <div class="editor-grid">
          ${inputField("Nome", state.profile.name, `data-bind="profile.name"`)}
          ${inputField("Frase", state.profile.tagline, `data-bind="profile.tagline"`)}
        </div>
      </article>
      <article class="card module-card full">
        <div class="card-title"><h2>Anotações</h2></div>
        ${textAreaField("Observações", state.notes || "", `data-bind="notes"`)}
      </article>
    </section>
  `;
}

function renderSimplePage(title, body) {
  return `<section class="module-grid"><article class="card module-card full"><div class="card-title"><h2>${title}</h2></div>${body}</article></section>`;
}

function renderMetas() {
  const goals = state.goals || "Chegar a 74 kg\nCorrer 50 km/semana\nDormir 7h30";
  const goalItems = goals
    .split("\n")
    .map((goal) => goal.trim())
    .filter(Boolean);

  return `
    <section class="module-grid goals-page">
      <article class="card module-card full">
        <div class="card-title"><h2>Metas atuais <span>${goalItems.length || 0} ativas</span></h2></div>
        <div class="goals-layout">
          <div class="goals-list">
            ${
              goalItems.length
                ? goalItems
                    .map(
                      (goal, index) => `
                        <div class="goal-card">
                          <span class="goal-badge">Meta ${index + 1}</span>
                          <strong>${goal}</strong>
                          <small>Em acompanhamento</small>
                        </div>
                      `,
                    )
                    .join("")
                : `<div class="empty-state"><i data-lucide="target"></i><div><strong>Nenhuma meta definida</strong><p>Adicione uma meta no campo ao lado.</p></div></div>`
            }
          </div>
          <label class="edit-field goals-editor">
            <span>Editar metas</span>
            <textarea data-bind="goals">${goals}</textarea>
          </label>
        </div>
      </article>
    </section>
  `;
}

const pageRenderers = {
  hoje: renderHoje,
  academia: renderAcademia,
  corrida: renderCorrida,
  dieta: renderDieta,
  habitos: renderHabitos,
  evolucao: renderEvolucao,
  relatorios: () =>
    renderSimplePage(
      "Relatórios",
      `<div class="module-kpis"><div class="module-kpi"><span>Treinos</span><strong>${state.workouts.length}</strong></div><div class="module-kpi"><span>Corrida</span><strong>${state.runs.reduce((sum, run) => sum + moneylessNumber(run.distance), 0).toFixed(1)} km</strong></div><div class="module-kpi"><span>Dia ativo</span><strong>${state.activeDay}</strong></div></div>`,
    ),
  metas: renderMetas,
  anotacoes: renderAnotacoes,
};

function setPath(path, value) {
  const keys = path.split(".");
  let target = state;
  keys.slice(0, -1).forEach((key) => {
    target = target[key];
  });
  target[keys[keys.length - 1]] = value;
  saveState();
  renderProfile();
  renderDashboard();
}

function bindEditorEvents(container, rerender) {
  container.querySelectorAll("[data-bind]").forEach((field) => {
    field.addEventListener("input", () =>
      setPath(field.dataset.bind, field.value),
    );
  });

  container.querySelectorAll("[data-bind-number]").forEach((field) => {
    field.addEventListener("input", () =>
      setPath(field.dataset.bindNumber, moneylessNumber(field.value)),
    );
  });

  container
    .querySelectorAll("[data-action='set-active-day']")
    .forEach((field) => {
      field.addEventListener("change", () => {
        state.activeDay = field.value;
        ensureDiet(state.activeDay);
        saveState();
        renderDashboard();
        rerender();
      });
    });

  container.querySelectorAll("[data-custom-day-select]").forEach((select) => {
    const toggle = select.querySelector(".custom-select-toggle");
    const menu = select.querySelector(".custom-select-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      menu.hidden = !menu.hidden;
    });

    select.querySelectorAll(".custom-select-option").forEach((option) => {
      option.addEventListener("click", () => {
        if (select.dataset.scope === "academy") {
          academyEditDay = option.dataset.day;
        } else {
          state.activeDay = option.dataset.day;
          ensureDiet(state.activeDay);
        }
        saveState();
        renderDashboard();
        rerender();
      });
    });
  });

  container
    .querySelectorAll("[data-action='add-exercise']")
    .forEach((button) => {
      button.addEventListener("click", () => {
        byDay(state.workouts, academyEditDay).exercises.push({
          name: "Novo exercício",
          detail: "3 séries x 10 reps",
          load: "-",
        });
        saveState();
        renderDashboard();
        rerender();
      });
    });

  container
    .querySelectorAll("[data-action='remove-exercise']")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state.workouts[button.dataset.workout].exercises.splice(
          button.dataset.exercise,
          1,
        );
        saveState();
        renderDashboard();
        rerender();
      });
    });

  container.querySelectorAll("[data-action='add-meal']").forEach((button) => {
    button.addEventListener("click", () => {
      ensureDiet(state.activeDay).meals.push({
        time: "00:00",
        name: "Nova refeição",
        desc: "Descreva a refeição.",
      });
      saveState();
      renderDashboard();
      rerender();
    });
  });

  container
    .querySelectorAll("[data-action='remove-meal']")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state.diets[button.dataset.diet].meals.splice(button.dataset.meal, 1);
        saveState();
        renderDashboard();
        rerender();
      });
    });

  container.querySelectorAll("[data-action='add-habit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.habits.push({
        name: "Novo hábito",
        icon: "circle",
        days: [false, false, false, false, false, false, false],
      });
      saveState();
      renderDashboard();
      rerender();
    });
  });

  container
    .querySelectorAll("[data-action='remove-habit']")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state.habits.splice(button.dataset.habit, 1);
        saveState();
        renderDashboard();
        rerender();
      });
    });

  container
    .querySelectorAll("[data-action='toggle-habit']")
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        state.habits[checkbox.dataset.habit].days[checkbox.dataset.day] =
          checkbox.checked;
        saveState();
        renderDashboard();
      });
    });
}

function setupThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    saveData();
  });
}

function setupInlineProfile() {
  const name = document.querySelector(".profile h3");
  const tagline = document.querySelector(".profile p");
  if (!name || !tagline) return;
  let profileSaveTimer;

  name.contentEditable = "true";
  tagline.contentEditable = "true";

  const persistProfile = (renderAfterSave = false) => {
    state.profile.name = name.textContent.trim() || defaultState.profile.name;
    state.profile.tagline =
      tagline.textContent.trim() || defaultState.profile.tagline;
    saveData();

    if (currentView === "dashboard") {
      setText(".topbar h1", dashboardGreeting());
    }

    if (renderAfterSave) {
      renderDashboard();
    }
  };

  const scheduleProfileSave = () => {
    clearTimeout(profileSaveTimer);
    profileSaveTimer = setTimeout(() => persistProfile(false), 250);
  };

  [name, tagline].forEach((field) => {
    field.addEventListener("input", scheduleProfileSave);
    field.addEventListener("blur", () => persistProfile(true));
    field.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        field.blur();
      }
    });
  });

  window.addEventListener("beforeunload", () => {
    persistProfile(false);
  });
}

function setupDailyResetWatcher() {
  setInterval(() => {
    const dateBeforeCheck = state.lastCalendarDate;
    normalizeCalendarDay();

    if (state.lastCalendarDate !== dateBeforeCheck) {
      renderDashboard();
    }
  }, 60 * 1000);
}

function setupViews() {
  const main = document.querySelector(".main");
  const topTitle = document.querySelector(".topbar h1");
  const topSubtitle = document.querySelector(".topbar p");
  const menuItems = document.querySelectorAll(".menu a[data-view]");
  if (!main || !topTitle || !topSubtitle || !menuItems.length) return;

  const dashboardView = document.createElement("div");
  dashboardView.className = "page-view";
  dashboardView.dataset.view = "dashboard";

  Array.from(main.children)
    .filter((child) => !child.classList.contains("topbar"))
    .forEach((child) => dashboardView.appendChild(child));
  main.appendChild(dashboardView);

  const moduleView = document.createElement("div");
  moduleView.className = "page-view";
  moduleView.dataset.view = "module";
  moduleView.hidden = true;
  main.appendChild(moduleView);

  const setTopbar = (view) => {
    currentView = view;
    const meta = viewMeta[view] || viewMeta.dashboard;
    topTitle.textContent =
      view === "dashboard" ? dashboardGreeting() : meta.title;
    topSubtitle.textContent = meta.subtitle;
  };

  const showView = (view) => {
    menuItems.forEach((link) =>
      link.classList.toggle("active", link.dataset.view === view),
    );
    setTopbar(view);
    saveData();

    if (view === "dashboard") {
      dashboardView.hidden = false;
      moduleView.hidden = true;
      moduleView.innerHTML = "";
      renderDashboard();
      renderIcons();
      return;
    }

    const rerender = () => showView(view);
    dashboardView.hidden = true;
    moduleView.hidden = false;
    moduleView.innerHTML = pageRenderers[view]
      ? pageRenderers[view]()
      : renderHoje();
    bindEditorEvents(moduleView, rerender);
    window.scrollTo(0, 0);
    renderIcons();
  };

  menuItems.forEach((item) => {
    item.addEventListener("pointerdown", () => {
      menuItems.forEach((link) => link.classList.toggle("active", link === item));
    });

    item.addEventListener("click", (event) => {
      event.preventDefault();
      navigateToView(item.dataset.view);
    });
  });

  navigateToView = (view) => {
    history.pushState({ view }, "", view === "dashboard" ? "#" : `#${view}`);
    showView(view);
  };

  window.addEventListener("popstate", () => {
    const view = location.hash.replace("#", "") || "dashboard";
    showView(viewMeta[view] ? view : "dashboard");
  });

  const initialView =
    location.hash.replace("#", "") || state.settings.currentView || "dashboard";
  showView(viewMeta[initialView] ? initialView : "dashboard");
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.toggle(
    "light-mode",
    Boolean(state.settings.lightMode),
  );
  renderIcons();
  setupTopDatePicker();
  setupThemeToggle();
  setupInlineProfile();
  setupViews();
  setupDailyResetWatcher();
  renderDashboard();
});
