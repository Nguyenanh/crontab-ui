exports.routes = {
	"root" : "/schedules",
	"save" : "/schedules/save",
	"run" : "/schedules/runjob",
	"crontab" : "/schedules/crontab",
	"stop" : "/schedules/stop",
	"start" : "/schedules/start",
	"remove": "/schedules/remove",
	"backup": "/schedules/backup",
	"restore": "/schedules/restore",
	"delete_backup": "/schedules/delete",
	"restore_backup": "/schedules/restore_backup",
	"export": "/schedules/export",
	"import": "/schedules/import", // this is import from database
	"import_crontab": "/schedules/import_crontab", // this is from existing crontab
	"logger": "/schedules/logger",
};
