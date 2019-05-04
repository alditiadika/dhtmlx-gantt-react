const firstGridColumns = {
  columns: [
    {
      name: "status",
      label: "",
      width: 50,
      align: "center",
      template: task => {
        return (
          '<input id="' +
          task.id +
          '" class="special-test" type="checkbox"' +
          (task.status ? "checked" : "") +
          "/>"
        )
      }
    },
    {
      name: "no",
      label: "No.",
      width: 50,
      align: "center"
    },
    {
      name: "unit_description",
      label: "Unit Description",
      width: 150,
      align: "center"
    },
    {
      name: "work_order_no",
      label: "WO No",
      width: 100,
      align: "center"
    },
    {
      name: "work_order_description",
      label: "WO Description",
      width: 200,
      align: "center"
    },
    {
      name: "priority",
      label: "Priority",
      width: 100,
      align: "center"
    },
    {
      name: "location",
      label: "Location",
      width: 100,
      align: "center"
    },
    {
      name: "sqc",
      label: "SQC",
      width: 100,
      align: "center"
    },
    {
      name: "wo_spv",
      label: "WO Spv",
      width: 120,
      align: "center"
    },
    {
      name: "start_date",
      label: "Start Date",
      width: 120,
      align: "center",
      template: task => task.start_date
    },
    {
      name: "end_date",
      label: "End Date",
      width: 120,
      align: "center",
      template: task => task.end_date
    },
    {
      name: "duration",
      label: "Duration",
      width: 80,
      align: "center",
      template: task => task.duration + " Days"
    }
  ]
}
const secondGridColumns = {
  columns: [
    {
      name: "assign_to",
      label: "Assign to",
      width: 100,
      align: "center"
    },
    {
      name: "tools",
      width: 100,
      label: "Impact",
      align: "center"
    },
    {
      name: "attachment",
      width: 100,
      label: "Attachment",
      align: "center"
    }
  ]
}
export const data = {
  data: [
    {
      id: 1,
      status: true,
      text: "Office itinerancy",
      start_date: "02-04-2017",
      duration: "8",
      progress: 0.4,
      open: false
    },
    {
      id: 2,
      text: "Office facing",
      start_date: "02-04-2017",
      duration: "8",
      progress: 0.6,
      open: true
    },
    {
      id: 3,
      status: true,
      text: "Furniture installation",
      start_date: "11-04-2017",
      duration: "8",
      progress: 0.6,
      open: true
    },
    {
      id: 4,
      text: "The employee relocation",
      start_date: "13-04-2017",
      duration: "6",
      progress: 0.5,
      open: true
    },
    {
      id: 5,
      text: "Interior office",
      start_date: "02-04-2017",
      duration: "7",
      progress: 0.6,
      open: true
    },
    {
      id: 6,
      text: "Air conditioners check",
      start_date: "03-04-2017",
      duration: "7",
      progress: 0.6,
      open: true
    },
    {
      id: 7,
      text: "Workplaces preparation",
      start_date: "11-04-2017",
      duration: "8",
      progress: 0.6,
      open: true
    },
    {
      id: 8,
      text: "Preparing workplaces",
      start_date: "14-04-2017",
      duration: "5",
      progress: 0.5,
      open: true
    },
    {
      id: 9,
      text: "Workplaces importation",
      start_date: "14-04-2017",
      duration: "4",
      progress: 0.5,
      open: true
    },
    {
      id: 10,
      text: "Workplaces exportation",
      start_date: "14-04-2017",
      duration: "3",
      progress: 0.5,
      open: true
    },
    { id: 11, text: "Product launch", progress: 0.6, open: true },
    {
      id: 12,
      text: "Perform Initial testing",
      start_date: "03-04-2017",
      duration: "5",
      progress: 1,
      open: true
    },
    {
      id: 13,
      text: "Development",
      start_date: "02-04-2017",
      duration: "7",
      progress: 0.5,
      open: true
    },
    {
      id: 14,
      text: "Analysis",
      start_date: "02-04-2017",
      duration: "6",
      progress: 0.8,
      open: true
    },
    {
      id: 15,
      text: "Design",
      start_date: "02-04-2017",
      duration: "5",
      progress: 0.2,
      open: false
    },
    {
      id: 16,
      text: "Documentation creation",
      start_date: "02-04-2017",
      duration: "7",
      progress: 0,
      open: true
    },
    {
      id: 17,
      text: "Develop System",
      start_date: "03-04-2017",
      duration: "2",
      progress: 1,
      open: true
    },
    {
      id: 25,
      text: "Beta Release",
      start_date: "06-04-2017",
      progress: 0,
      open: true
    },
    {
      id: 18,
      text: "Integrate System",
      start_date: "08-04-2017",
      duration: "2",
      progress: 0.8,
      open: true
    },
    {
      id: 19,
      text: "Test",
      start_date: "10-04-2017",
      duration: "4",
      progress: 0.2,
      open: true
    },
    {
      id: 20,
      text: "Marketing",
      start_date: "10-04-2017",
      duration: "4",
      progress: 0,
      open: true
    },
    {
      id: 21,
      text: "Design database",
      start_date: "03-04-2017",
      duration: "4",
      progress: 0.5,
      open: true
    },
    {
      id: 22,
      text: "Software design",
      start_date: "03-04-2017",
      duration: "4",
      progress: 0.1,
      open: true
    },
    {
      id: 23,
      text: "Interface setup",
      start_date: "03-04-2017",
      duration: "5",
      progress: 0,
      open: true
    },
    {
      id: 24,
      text: "Release v1.0",
      start_date: "15-04-2017",
      progress: 0,
      open: true
    }
  ]
}
export function setZoom(gantt, value) {
  switch (value) {
    case "Hours":
      gantt.config.scale_unit = "day"
      gantt.config.date_scale = "%d %M"

      gantt.config.scale_height = 60
      gantt.config.min_column_width = 30
      gantt.config.subscales = [{ unit: "hour", step: 1, date: "%H" }]
      break
    case "Days":
      gantt.config.min_column_width = 70
      // gantt.config.scale_unit = 'week'
      // gantt.config.date_scale = '#%W'
      gantt.config.subscales = [{ unit: "year", step: 1, date: "%Y" }]
      gantt.config.scale_height = 60
      break
    case "Months":
      gantt.config.min_column_width = 70
      gantt.config.scale_unit = "month"
      // gantt.config.date_scale = '%F'
      gantt.config.scale_height = 60
      gantt.config.subscales = [{ unit: "year", step: 1, date: "%Y" }]
      break
    default:
      break
  }
}
export const layout = {
  css: "gantt_container",
  rows: [
    {
      cols: [
        {
          width: 400,
          min_width: 350,
          rows: [
            {
              view: "grid",
              scrollX: "scrollHor",
              scrollable: true,
              scrollY: "scrollVer",
              config: firstGridColumns
            }
          ]
        },
        { resizer: true, width: 1 },
        {
          min_width: 600,
          rows: [
            {
              view: "timeline",
              scrollX: "scrollHor",
              scrollable: true,
              scrollY: "scrollVer"
            }
          ]
        },
        { resizer: true, width: 1 },
        {
          view: "grid",
          width: 300,
          bind: "task",
          scrollY: "scrollVer",
          scrollX: "scrollHor",
          config: secondGridColumns
        },
        { view: "scrollbar", id: "scrollVer" }
      ]
    },
    { view: "scrollbar", id: "scrollHor", height: 20 }
  ]
}
