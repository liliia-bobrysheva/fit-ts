export type File = "device" | "settings" | "sport" | "activity" | "workout" | "course" | "schedules" | "weight" | "totals" | "goals" | "blood_pressure" | "monitoring_a" | "activity_summary" | "monitoring_daily" | "monitoring_b" | "segment" | "segment_list" | "exd_configuration" | "mfg_range_min" | "mfg_range_max";
export type MesgNum = "file_id" | "capabilities" | "device_settings" | "user_profile" | "hrm_profile" | "sdm_profile" | "bike_profile" | "zones_target" | "hr_zone" | "power_zone" | "met_zone" | "sport" | "goal" | "session" | "lap" | "record" | "event" | "device_info" | "workout" | "workout_step" | "schedule" | "weight_scale" | "course" | "course_point" | "totals" | "activity" | "software" | "file_capabilities" | "mesg_capabilities" | "field_capabilities" | "file_creator" | "blood_pressure" | "speed_zone" | "monitoring" | "training_file" | "hrv" | "ant_rx" | "ant_tx" | "ant_channel_id" | "length" | "monitoring_info" | "pad" | "slave_device" | "connectivity" | "weather_conditions" | "weather_alert" | "cadence_zone" | "hr" | "segment_lap" | "memo_glob" | "segment_id" | "segment_leaderboard_entry" | "segment_point" | "segment_file" | "workout_session" | "watchface_settings" | "gps_metadata" | "camera_event" | "timestamp_correlation" | "gyroscope_data" | "accelerometer_data" | "three_d_sensor_calibration" | "video_frame" | "obdii_data" | "nmea_sentence" | "aviation_attitude" | "video" | "video_title" | "video_description" | "video_clip" | "exd_screen_configuration" | "exd_data_field_configuration" | "exd_data_concept_configuration" | "field_description" | "developer_data_id" | "magnetometer_data" | "barometer_data" | "one_d_sensor_calibration" | "set" | "stress_level" | "dive_settings" | "dive_gas" | "dive_alarm" | "exercise_title" | "dive_summary" | "jump" | "climb_pro" | "mfg_range_min" | "mfg_range_max";
export type Checksum = "clear" | "ok";
export type FileFlags = 0 | "read" | "write" | "erase";
export type MesgCount = "num_per_file" | "max_per_file" | "max_per_file_type";
export type DateTime = 0 | "min";
export type LocalDateTime = 0 | "min";
export type MessageIndex = 0 | "mask" | "reserved" | "selected";
export type Gender = "female" | "male";
export type Language = "english" | "french" | "italian" | "german" | "spanish" | "croatian" | "czech" | "danish" | "dutch" | "finnish" | "greek" | "hungarian" | "norwegian" | "polish" | "portuguese" | "slovakian" | "slovenian" | "swedish" | "russian" | "turkish" | "latvian" | "ukrainian" | "arabic" | "farsi" | "bulgarian" | "romanian" | "chinese" | "japanese" | "korean" | "taiwanese" | "thai" | "hebrew" | "brazilian_portuguese" | "indonesian" | "malaysian" | "vietnamese" | "burmese" | "mongolian" | "custom";
export type LanguageBits0 = 0 | "english" | "french" | "italian" | "german" | "spanish" | "croatian" | "czech" | "danish";
export type LanguageBits1 = 0 | "dutch" | "finnish" | "greek" | "hungarian" | "norwegian" | "polish" | "portuguese" | "slovakian";
export type LanguageBits2 = 0 | "slovenian" | "swedish" | "russian" | "turkish" | "latvian" | "ukrainian" | "arabic" | "farsi";
export type LanguageBits3 = 0 | "bulgarian" | "romanian" | "chinese" | "japanese" | "korean" | "taiwanese" | "thai" | "hebrew";
export type LanguageBits4 = 0 | "brazilian_portuguese" | "indonesian" | "malaysian" | "vietnamese" | "burmese" | "mongolian";
export type TimeZone = "almaty" | "bangkok" | "bombay" | "brasilia" | "cairo" | "cape_verde_is" | "darwin" | "eniwetok" | "fiji" | "hong_kong" | "islamabad" | "kabul" | "magadan" | "mid_atlantic" | "moscow" | "muscat" | "newfoundland" | "samoa" | "sydney" | "tehran" | "tokyo" | "us_alaska" | "us_atlantic" | "us_central" | "us_eastern" | "us_hawaii" | "us_mountain" | "us_pacific" | "other" | "auckland" | "kathmandu" | "europe_western_wet" | "europe_central_cet" | "europe_eastern_eet" | "jakarta" | "perth" | "adelaide" | "brisbane" | "tasmania" | "iceland" | "amsterdam" | "athens" | "barcelona" | "berlin" | "brussels" | "budapest" | "copenhagen" | "dublin" | "helsinki" | "lisbon" | "london" | "madrid" | "munich" | "oslo" | "paris" | "prague" | "reykjavik" | "rome" | "stockholm" | "vienna" | "warsaw" | "zurich" | "quebec" | "ontario" | "manitoba" | "saskatchewan" | "alberta" | "british_columbia" | "boise" | "boston" | "chicago" | "dallas" | "denver" | "kansas_city" | "las_vegas" | "los_angeles" | "miami" | "minneapolis" | "new_york" | "new_orleans" | "phoenix" | "santa_fe" | "seattle" | "washington_dc" | "us_arizona" | "chita" | "ekaterinburg" | "irkutsk" | "kaliningrad" | "krasnoyarsk" | "novosibirsk" | "petropavlovsk_kamchatskiy" | "samara" | "vladivostok" | "mexico_central" | "mexico_mountain" | "mexico_pacific" | "cape_town" | "winkhoek" | "lagos" | "riyahd" | "venezuela" | "australia_lh" | "santiago" | "manual" | "automatic";
export type DisplayMeasure = "metric" | "statute" | "nautical";
export type DisplayHeart = "bpm" | "max" | "reserve";
export type DisplayPower = "watts" | "percent_ftp";
export type DisplayPosition = "degree" | "degree_minute" | "degree_minute_second" | "austrian_grid" | "british_grid" | "dutch_grid" | "hungarian_grid" | "finnish_grid" | "german_grid" | "icelandic_grid" | "indonesian_equatorial" | "indonesian_irian" | "indonesian_southern" | "india_zone_0" | "india_zone_IA" | "india_zone_IB" | "india_zone_IIA" | "india_zone_IIB" | "india_zone_IIIA" | "india_zone_IIIB" | "india_zone_IVA" | "india_zone_IVB" | "irish_transverse" | "irish_grid" | "loran" | "maidenhead_grid" | "mgrs_grid" | "new_zealand_grid" | "new_zealand_transverse" | "qatar_grid" | "modified_swedish_grid" | "swedish_grid" | "south_african_grid" | "swiss_grid" | "taiwan_grid" | "united_states_grid" | "utm_ups_grid" | "west_malayan" | "borneo_rso" | "estonian_grid" | "latvian_grid" | "swedish_ref_99_grid";
export type SwitchState = "off" | "on" | "auto";
export type SportType = "generic" | "running" | "cycling" | "transition" | "fitness_equipment" | "swimming" | "basketball" | "soccer" | "tennis" | "american_football" | "training" | "walking" | "cross_country_skiing" | "alpine_skiing" | "snowboarding" | "rowing" | "mountaineering" | "hiking" | "multisport" | "paddling" | "flying" | "e_biking" | "motorcycling" | "boating" | "driving" | "golf" | "hang_gliding" | "horseback_riding" | "hunting" | "fishing" | "inline_skating" | "rock_climbing" | "sailing" | "ice_skating" | "sky_diving" | "snowshoeing" | "snowmobiling" | "stand_up_paddleboarding" | "surfing" | "wakeboarding" | "water_skiing" | "kayaking" | "rafting" | "windsurfing" | "kitesurfing" | "tactical" | "jumpmaster" | "boxing" | "floor_climbing" | "diving" | "all";
export type SportBits0 = 0 | "generic" | "running" | "cycling" | "transition" | "fitness_equipment" | "swimming" | "basketball" | "soccer";
export type SportBits1 = 0 | "tennis" | "american_football" | "training" | "walking" | "cross_country_skiing" | "alpine_skiing" | "snowboarding" | "rowing";
export type SportBits2 = 0 | "mountaineering" | "hiking" | "multisport" | "paddling" | "flying" | "e_biking" | "motorcycling" | "boating";
export type SportBits3 = 0 | "driving" | "golf" | "hang_gliding" | "horseback_riding" | "hunting" | "fishing" | "inline_skating" | "rock_climbing";
export type SportBits4 = 0 | "sailing" | "ice_skating" | "sky_diving" | "snowshoeing" | "snowmobiling" | "stand_up_paddleboarding" | "surfing" | "wakeboarding";
export type SportBits5 = 0 | "water_skiing" | "kayaking" | "rafting" | "windsurfing" | "kitesurfing" | "tactical" | "jumpmaster" | "boxing";
export type SportBits6 = 0 | "floor_climbing";
export type SubSport = "generic" | "treadmill" | "street" | "trail" | "track" | "spin" | "indoor_cycling" | "road" | "mountain" | "downhill" | "recumbent" | "cyclocross" | "hand_cycling" | "track_cycling" | "indoor_rowing" | "elliptical" | "stair_climbing" | "lap_swimming" | "open_water" | "flexibility_training" | "strength_training" | "warm_up" | "match" | "exercise" | "challenge" | "indoor_skiing" | "cardio_training" | "indoor_walking" | "e_bike_fitness" | "bmx" | "casual_walking" | "speed_walking" | "bike_to_run_transition" | "run_to_bike_transition" | "swim_to_bike_transition" | "atv" | "motocross" | "backcountry" | "resort" | "rc_drone" | "wingsuit" | "whitewater" | "skate_skiing" | "yoga" | "pilates" | "indoor_running" | "gravel_cycling" | "e_bike_mountain" | "commuting" | "mixed_surface" | "navigate" | "track_me" | "map" | "single_gas_diving" | "multi_gas_diving" | "gauge_diving" | "apnea_diving" | "apnea_hunting" | "virtual_activity" | "obstacle" | "all";
export type SportEvent = "uncategorized" | "geocaching" | "fitness" | "recreation" | "race" | "special_event" | "training" | "transportation" | "touring";
export type Activity = "manual" | "auto_multi_sport";
export type Intensity = "active" | "rest" | "warmup" | "cooldown";
export type SessionTrigger = "activity_end" | "manual" | "auto_multi_sport" | "fitness_equipment";
export type AutolapTrigger = "time" | "distance" | "position_start" | "position_lap" | "position_waypoint" | "position_marked" | "off";
export type LapTrigger = "manual" | "time" | "distance" | "position_start" | "position_lap" | "position_waypoint" | "position_marked" | "session_end" | "fitness_equipment";
export type TimeMode = "hour12" | "hour24" | "military" | "hour_12_with_seconds" | "hour_24_with_seconds" | "utc";
export type BacklightMode = "off" | "manual" | "key_and_messages" | "auto_brightness" | "smart_notifications" | "key_and_messages_night" | "key_and_messages_and_smart_notifications";
export type DateMode = "day_month" | "month_day";
export type BacklightTimeout = "infinite";
export type Event = "timer" | "workout" | "workout_step" | "power_down" | "power_up" | "off_course" | "session" | "lap" | "course_point" | "battery" | "virtual_partner_pace" | "hr_high_alert" | "hr_low_alert" | "speed_high_alert" | "speed_low_alert" | "cad_high_alert" | "cad_low_alert" | "power_high_alert" | "power_low_alert" | "recovery_hr" | "battery_low" | "time_duration_alert" | "distance_duration_alert" | "calorie_duration_alert" | "activity" | "fitness_equipment" | "length" | "user_marker" | "sport_point" | "calibration" | "front_gear_change" | "rear_gear_change" | "rider_position_change" | "elev_high_alert" | "elev_low_alert" | "comm_timeout";
export type EventType = "start" | "stop" | "consecutive_depreciated" | "marker" | "stop_all" | "begin_depreciated" | "end_depreciated" | "end_all_depreciated" | "stop_disable" | "stop_disable_all";
export type TimerTrigger = "manual" | "auto" | "fitness_equipment";
export type FitnessEquipmentState = "ready" | "in_use" | "paused" | "unknown";
export type Tone = "off" | "tone" | "vibrate" | "tone_and_vibrate";
export type AutoScroll = "none" | "slow" | "medium" | "fast";
export type ActivityClass = 0 | "level_max" | "level" | "athlete";
export type HRZoneCalc = "custom" | "percent_max_hr" | "percent_hrr";
export type PwrZoneCalc = "custom" | "percent_ftp";
export type WktStepDuration = "time" | "distance" | "hr_less_than" | "hr_greater_than" | "calories" | "open" | "repeat_until_steps_cmplt" | "repeat_until_time" | "repeat_until_distance" | "repeat_until_calories" | "repeat_until_hr_less_than" | "repeat_until_hr_greater_than" | "repeat_until_power_less_than" | "repeat_until_power_greater_than" | "power_less_than" | "power_greater_than" | "training_peaks_tss" | "repeat_until_power_last_lap_less_than" | "repeat_until_max_power_last_lap_less_than" | "power_3s_less_than" | "power_10s_less_than" | "power_30s_less_than" | "power_3s_greater_than" | "power_10s_greater_than" | "power_30s_greater_than" | "power_lap_less_than" | "power_lap_greater_than" | "repeat_until_training_peaks_tss" | "repetition_time" | "reps";
export type WktStepTarget = "speed" | "heart_rate" | "open" | "cadence" | "power" | "grade" | "resistance" | "power_3s" | "power_10s" | "power_30s" | "power_lap" | "swim_stroke" | "speed_lap" | "heart_rate_lap";
export type Goal = "time" | "distance" | "calories" | "frequency" | "steps" | "ascent" | "active_minutes";
export type GoalRecurrence = "off" | "daily" | "weekly" | "monthly" | "yearly" | "custom";
export type GoalSource = "auto" | "community" | "user";
export type Schedule = "workout" | "course";
export type CoursePointType = "generic" | "summit" | "valley" | "water" | "food" | "danger" | "left" | "right" | "straight" | "first_aid" | "fourth_category" | "third_category" | "second_category" | "first_category" | "hors_category" | "sprint" | "left_fork" | "right_fork" | "middle_fork" | "slight_left" | "sharp_left" | "slight_right" | "sharp_right" | "u_turn" | "segment_start" | "segment_end";
export type Manufacturer = 0 | "garmin" | "garmin_fr405_antfs" | "zephyr" | "dayton" | "idt" | "srm" | "quarq" | "ibike" | "saris" | "spark_hk" | "tanita" | "echowell" | "dynastream_oem" | "nautilus" | "dynastream" | "timex" | "metrigear" | "xelic" | "beurer" | "cardiosport" | "a_and_d" | "hmm" | "suunto" | "thita_elektronik" | "gpulse" | "clean_mobile" | "pedal_brain" | "peaksware" | "saxonar" | "lemond_fitness" | "dexcom" | "wahoo_fitness" | "octane_fitness" | "archinoetics" | "the_hurt_box" | "citizen_systems" | "magellan" | "osynce" | "holux" | "concept2" | "one_giant_leap" | "ace_sensor" | "brim_brothers" | "xplova" | "perception_digital" | "bf1systems" | "pioneer" | "spantec" | "metalogics" | "4iiiis" | "seiko_epson" | "seiko_epson_oem" | "ifor_powell" | "maxwell_guider" | "star_trac" | "breakaway" | "alatech_technology_ltd" | "mio_technology_europe" | "rotor" | "geonaute" | "id_bike" | "specialized" | "wtek" | "physical_enterprises" | "north_pole_engineering" | "bkool" | "cateye" | "stages_cycling" | "sigmasport" | "tomtom" | "peripedal" | "wattbike" | "moxy" | "ciclosport" | "powerbahn" | "acorn_projects_aps" | "lifebeam" | "bontrager" | "wellgo" | "scosche" | "magura" | "woodway" | "elite" | "nielsen_kellerman" | "dk_city" | "tacx" | "direction_technology" | "magtonic" | "1partcarbon" | "inside_ride_technologies" | "sound_of_motion" | "stryd" | "icg" | "mipulse" | "bsx_athletics" | "look" | "campagnolo_srl" | "body_bike_smart" | "praxisworks" | "limits_technology" | "topaction_technology" | "cosinuss" | "fitcare" | "magene" | "giant_manufacturing_co" | "tigrasport" | "salutron" | "technogym" | "bryton_sensors" | "latitude_limited" | "soaring_technology" | "igpsport" | "thinkrider" | "gopher_sport" | "waterrower" | "orangetheory" | "inpeak" | "kinetic" | "johnson_health_tech" | "polar_electro" | "seesense" | "nci_technology" | "development" | "healthandlife" | "lezyne" | "scribe_labs" | "zwift" | "watteam" | "recon" | "favero_electronics" | "dynovelo" | "strava" | "precor" | "bryton" | "sram" | "navman" | "cobi" | "spivi" | "mio_magellan" | "evesports" | "sensitivus_gauge" | "podoon" | "life_time_fitness" | "falco_e_motors" | "minoura" | "cycliq" | "luxottica" | "trainer_road" | "the_sufferfest" | "fullspeedahead" | "virtualtraining" | "feedbacksports" | "omata" | "vdo" | "magneticdays" | "hammerhead" | "kinetic_by_kurt" | "shapelog" | "dabuziduo" | "jetblack" | "coros" | "virtugo" | "velosense" | "actigraphcorp";
export type GarminProduct = "hrm_bike" | "hrm1" | "axh01" | "axb01" | "axb02" | "hrm2ss" | "dsi_alf02" | "hrm3ss" | "hrm_run_single_byte_product_id" | "bsm" | "bcm" | "axs01" | "hrm_tri_single_byte_product_id" | "fr225_single_byte_product_id" | "fr301_china" | "fr301_japan" | "fr301_korea" | "fr301_taiwan" | "fr405" | "fr50" | "fr405_japan" | "fr60" | "dsi_alf01" | "fr310xt" | "edge500" | "fr110" | "edge800" | "edge500_taiwan" | "edge500_japan" | "chirp" | "fr110_japan" | "edge200" | "fr910xt" | "edge800_taiwan" | "edge800_japan" | "alf04" | "fr610" | "fr210_japan" | "vector_ss" | "vector_cp" | "edge800_china" | "edge500_china" | "fr610_japan" | "edge500_korea" | "fr70" | "fr310xt_4t" | "amx" | "fr10" | "edge800_korea" | "swim" | "fr910xt_china" | "fenix" | "edge200_taiwan" | "edge510" | "edge810" | "tempe" | "fr910xt_japan" | "fr620" | "fr220" | "fr910xt_korea" | "fr10_japan" | "edge810_japan" | "virb_elite" | "edge_touring" | "edge510_japan" | "hrm_tri" | "hrm_run" | "fr920xt" | "edge510_asia" | "edge810_china" | "edge810_taiwan" | "edge1000" | "vivo_fit" | "virb_remote" | "vivo_ki" | "fr15" | "vivo_active" | "edge510_korea" | "fr620_japan" | "fr620_china" | "fr220_japan" | "fr220_china" | "approach_s6" | "vivo_smart" | "fenix2" | "epix" | "fenix3" | "edge1000_taiwan" | "edge1000_japan" | "fr15_japan" | "edge520" | "edge1000_china" | "fr620_russia" | "fr220_russia" | "vector_s" | "edge1000_korea" | "fr920xt_taiwan" | "fr920xt_china" | "fr920xt_japan" | "virbx" | "vivo_smart_apac" | "etrex_touch" | "edge25" | "fr25" | "vivo_fit2" | "fr225" | "fr630" | "fr230" | "fr735xt" | "vivo_active_apac" | "vector_2" | "vector_2s" | "virbxe" | "fr620_taiwan" | "fr220_taiwan" | "truswing" | "fenix3_china" | "fenix3_twn" | "varia_headlight" | "varia_taillight_old" | "edge_explore_1000" | "fr225_asia" | "varia_radar_taillight" | "varia_radar_display" | "edge20" | "d2_bravo" | "approach_s20" | "varia_remote" | "hrm4_run" | "vivo_active_hr" | "vivo_smart_hr" | "vivo_move" | "varia_vision" | "vivo_fit3" | "fenix3_hr" | "virb_ultra_30" | "index_smart_scale" | "fr235" | "fenix3_chronos" | "oregon7xx" | "rino7xx" | "nautix" | "edge_820" | "edge_explore_820" | "fenix5s" | "d2_bravo_titanium" | "varia_ut800" | "running_dynamics_pod" | "fenix5x" | "vivo_fit_jr" | "fr935" | "fenix5" | "descent" | "sdm4" | "edge_remote" | "training_center" | "connectiq_simulator" | "android_antplus_plugin" | "connect";
export type ANTPlusDeviceType = 0 | "antfs" | "bike_power" | "environment_sensor_legacy" | "multi_sport_speed_distance" | "control" | "fitness_equipment" | "blood_pressure" | "geocache_node" | "light_electric_vehicle" | "env_sensor" | "racquet" | "control_hub" | "muscle_oxygen" | "bike_light_main" | "bike_light_shared" | "exd" | "bike_radar" | "weight_scale" | "heart_rate" | "bike_speed_cadence" | "bike_cadence" | "bike_speed" | "stride_speed_distance";
export type ANTNetwork = "public" | "antplus" | "antfs" | "private";
export type WorkoutCapabilities = 0 | "interval" | "custom" | "fitness_equipment" | "firstbeat" | "new_leaf" | "tcx" | "speed" | "heart_rate" | "distance" | "cadence" | "power" | "grade" | "resistance" | "protected";
export type BatteryStatus = 0 | "new" | "good" | "ok" | "low" | "critical" | "charging" | "unknown";
export type HRType = "normal" | "irregular";
export type CourseCapabilities = 0 | "processed" | "valid" | "time" | "distance" | "position" | "heart_rate" | "power" | "cadence" | "training" | "navigation" | "bikeway";
export type Weight = 0 | "calculating";
export type WorkoutHR = 0 | "bpm_offset";
export type WorkoutPower = 0 | "watts_offset";
export type BPStatus = "no_error" | "error_incomplete_data" | "error_no_measurement" | "error_data_out_of_range" | "error_irregular_heart_rate";
export type UserLocalId = "local_min" | "local_max" | "stationary_min" | "stationary_max" | "portable_min" | "portable_max";
export type SwimStroke = "freestyle" | "backstroke" | "breaststroke" | "butterfly" | "drill" | "mixed" | "im";
export type ActivityType = "generic" | "running" | "cycling" | "transition" | "fitness_equipment" | "swimming" | "walking" | "sedentary" | "all";
export type ActivitySubtype = "generic" | "treadmill" | "street" | "trail" | "track" | "spin" | "indoor_cycling" | "road" | "mountain" | "downhill" | "recumbent" | "cyclocross" | "hand_cycling" | "track_cycling" | "indoor_rowing" | "elliptical" | "stair_climbing" | "lap_swimming" | "open_water" | "all";
export type ActivityLevel = "low" | "medium" | "high";
export type Side = "right" | "left";
export type LeftRightBalance = 0 | "mask" | "right";
export type LeftRightBalance100 = 0 | "mask" | "right";
export type LengthType = "idle" | "active";
export type DayOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
export type ConnectivityCapabilities = 0 | "bluetooth" | "bluetooth_le" | "ant" | "activity_upload" | "course_download" | "workout_download" | "live_track" | "weather_conditions" | "weather_alerts" | "gps_ephemeris_download" | "explicit_archive" | "setup_incomplete" | "continue_sync_after_software_update" | "connect_iq_app_download" | "golf_course_download" | "device_initiates_sync" | "connect_iq_watch_app_download" | "connect_iq_widget_download" | "connect_iq_watch_face_download" | "connect_iq_data_field_download" | "connect_iq_app_managment" | "swing_sensor" | "swing_sensor_remote" | "incident_detection" | "audio_prompts" | "wifi_verification" | "true_up" | "find_my_watch" | "remote_manual_sync" | "live_track_auto_start" | "live_track_messaging" | "instant_input";
export type WeatherReport = "current" | "hourly_forecast" | "daily_forecast";
export type WeatherStatus = "clear" | "partly_cloudy" | "mostly_cloudy" | "rain" | "snow" | "windy" | "thunderstorms" | "wintry_mix" | "fog" | "hazy" | "hail" | "scattered_showers" | "scattered_thunderstorms" | "unknown_precipitation" | "light_rain" | "heavy_rain" | "light_snow" | "heavy_snow" | "light_rain_snow" | "heavy_rain_snow" | "cloudy";
export type WeatherSeverity = "unknown" | "warning" | "watch" | "advisory" | "statement";
export type WeatherSevereType = "unspecified" | "tornado" | "tsunami" | "hurricane" | "extreme_wind" | "typhoon" | "inland_hurricane" | "hurricane_force_wind" | "waterspout" | "severe_thunderstorm" | "wreckhouse_winds" | "les_suetes_wind" | "avalanche" | "flash_flood" | "tropical_storm" | "inland_tropical_storm" | "blizzard" | "ice_storm" | "freezing_rain" | "debris_flow" | "flash_freeze" | "dust_storm" | "high_wind" | "winter_storm" | "heavy_freezing_spray" | "extreme_cold" | "wind_chill" | "cold_wave" | "heavy_snow_alert" | "lake_effect_blowing_snow" | "snow_squall" | "lake_effect_snow" | "winter_weather" | "sleet" | "snowfall" | "snow_and_blowing_snow" | "blowing_snow" | "snow_alert" | "arctic_outflow" | "freezing_drizzle" | "storm" | "storm_surge" | "rainfall" | "areal_flood" | "coastal_flood" | "lakeshore_flood" | "excessive_heat" | "heat" | "weather" | "high_heat_and_humidity" | "humidex_and_health" | "humidex" | "gale" | "freezing_spray" | "special_marine" | "squall" | "strong_wind" | "lake_wind" | "marine_weather" | "wind" | "small_craft_hazardous_seas" | "hazardous_seas" | "small_craft" | "small_craft_winds" | "small_craft_rough_bar" | "high_water_level" | "ashfall" | "freezing_fog" | "dense_fog" | "dense_smoke" | "blowing_dust" | "hard_freeze" | "freeze" | "frost" | "fire_weather" | "flood" | "rip_tide" | "high_surf" | "smog" | "air_quality" | "brisk_wind" | "air_stagnation" | "low_water" | "hydrological" | "special_weather";
export type StrokeType = "no_event" | "other" | "serve" | "forehand" | "backhand" | "smash";
export type BodyLocation = "left_leg" | "left_calf" | "left_shin" | "left_hamstring" | "left_quad" | "left_glute" | "right_leg" | "right_calf" | "right_shin" | "right_hamstring" | "right_quad" | "right_glute" | "torso_back" | "left_lower_back" | "left_upper_back" | "right_lower_back" | "right_upper_back" | "torso_front" | "left_abdomen" | "left_chest" | "right_abdomen" | "right_chest" | "left_arm" | "left_shoulder" | "left_bicep" | "left_tricep" | "left_brachioradialis" | "left_forearm_extensors" | "right_arm" | "right_shoulder" | "right_bicep" | "right_tricep" | "right_brachioradialis" | "right_forearm_extensors" | "neck" | "throat" | "waist_mid_back" | "waist_front" | "waist_left" | "waist_right";
export type SegmentLapStatus = "end" | "fail";
export type SegmentLeaderboardType = "overall" | "personal_best" | "connections" | "group" | "challenger" | "kom" | "qom" | "pr" | "goal" | "rival" | "club_leader";
export type SegmentDeleteStatus = "do_not_delete" | "delete_one" | "delete_all";
export type SegmentSelectionType = "starred" | "suggested";
export type SourceType = "ant" | "antplus" | "bluetooth" | "bluetooth_low_energy" | "wifi" | "local";
export type DisplayOrientation = "auto" | "portrait" | "landscape" | "portrait_flipped" | "landscape_flipped";
export type WorkoutEquipment = "none" | "swim_fins" | "swim_kickboard" | "swim_paddles" | "swim_pull_buoy" | "swim_snorkel";
export type WatchfaceMode = "digital" | "analog" | "connect_iq" | "disabled";
export type DigitalWatchfaceLayout = "traditional" | "modern" | "bold";
export type AnalogWatchfaceLayout = "minimal" | "traditional" | "modern";
export type RiderPositionType = "seated" | "standing" | "transition_to_seated" | "transition_to_standing";
export type PowerPhaseType = "power_phase_start_angle" | "power_phase_end_angle" | "power_phase_arc_length" | "power_phase_center";
export type CameraEventType = "video_start" | "video_split" | "video_end" | "photo_taken" | "video_second_stream_start" | "video_second_stream_split" | "video_second_stream_end" | "video_split_start" | "video_second_stream_split_start" | "video_pause" | "video_second_stream_pause" | "video_resume" | "video_second_stream_resume";
export type SensorType = "accelerometer" | "gyroscope" | "compass" | "barometer";
export type BikeLightNetworkConfigType = "auto" | "individual" | "high_visibility" | "trail";
export type CommTimeoutType = "wildcard_pairing_timeout" | "pairing_timeout" | "connection_lost" | "connection_timeout";
export type CameraOrientationType = "camera_orientation_0" | "camera_orientation_90" | "camera_orientation_180" | "camera_orientation_270";
export type AttitudeStage = "failed" | "aligning" | "degraded" | "valid";
export type AttitudeValidity = 0 | "track_angle_heading_valid" | "pitch_valid" | "roll_valid" | "lateral_body_accel_valid" | "normal_body_accel_valid" | "turn_rate_valid" | "hw_fail" | "mag_invalid" | "no_gps" | "gps_invalid" | "solution_coasting" | "true_track_angle" | "magnetic_heading";
export type AutoSyncFrequency = "never" | "occasionally" | "frequent" | "once_a_day" | "remote";
export type ExdLayout = "full_screen" | "half_vertical" | "half_horizontal" | "half_vertical_right_split" | "half_horizontal_bottom_split" | "full_quarter_split" | "half_vertical_left_split" | "half_horizontal_top_split";
export type ExdDisplayType = "numerical" | "simple" | "graph" | "bar" | "circle_graph" | "virtual_partner" | "balance" | "string_list" | "string" | "simple_dynamic_icon" | "gauge";
export type ExdDataUnits = "no_units" | "laps" | "miles_per_hour" | "kilometers_per_hour" | "feet_per_hour" | "meters_per_hour" | "degrees_celsius" | "degrees_farenheit" | "zone" | "gear" | "rpm" | "bpm" | "degrees" | "millimeters" | "meters" | "kilometers" | "feet" | "yards" | "kilofeet" | "miles" | "time" | "enum_turn_type" | "percent" | "watts" | "watts_per_kilogram" | "enum_battery_status" | "enum_bike_light_beam_angle_mode" | "enum_bike_light_battery_status" | "enum_bike_light_network_config_type" | "lights" | "seconds" | "minutes" | "hours" | "calories" | "kilojoules" | "milliseconds" | "second_per_mile" | "second_per_kilometer" | "centimeter" | "enum_course_point" | "bradians" | "enum_sport" | "inches_hg" | "mm_hg" | "mbars" | "hecto_pascals" | "feet_per_min" | "meters_per_min" | "meters_per_sec" | "eight_cardinal";
export type ExdQualifiers = "no_qualifier" | "instantaneous" | "average" | "lap" | "maximum" | "maximum_average" | "maximum_lap" | "last_lap" | "average_lap" | "to_destination" | "to_go" | "to_next" | "next_course_point" | "total" | "three_second_average" | "ten_second_average" | "thirty_second_average" | "percent_maximum" | "percent_maximum_average" | "lap_percent_maximum" | "elapsed" | "sunrise" | "sunset" | "compared_to_virtual_partner" | "maximum_24h" | "minimum_24h" | "minimum" | "first" | "second" | "third" | "shifter" | "last_sport" | "moving" | "stopped" | "estimated_total" | "zone_9" | "zone_8" | "zone_7" | "zone_6" | "zone_5" | "zone_4" | "zone_3" | "zone_2" | "zone_1";
export type ExdDescriptors = "bike_light_battery_status" | "beam_angle_status" | "batery_level" | "light_network_mode" | "number_lights_connected" | "cadence" | "distance" | "estimated_time_of_arrival" | "heading" | "time" | "battery_level" | "trainer_resistance" | "trainer_target_power" | "time_seated" | "time_standing" | "elevation" | "grade" | "ascent" | "descent" | "vertical_speed" | "di2_battery_level" | "front_gear" | "rear_gear" | "gear_ratio" | "heart_rate" | "heart_rate_zone" | "time_in_heart_rate_zone" | "heart_rate_reserve" | "calories" | "gps_accuracy" | "gps_signal_strength" | "temperature" | "time_of_day" | "balance" | "pedal_smoothness" | "power" | "functional_threshold_power" | "intensity_factor" | "work" | "power_ratio" | "normalized_power" | "training_stress_Score" | "time_on_zone" | "speed" | "laps" | "reps" | "workout_step" | "course_distance" | "navigation_distance" | "course_estimated_time_of_arrival" | "navigation_estimated_time_of_arrival" | "course_time" | "navigation_time" | "course_heading" | "navigation_heading" | "power_zone" | "torque_effectiveness" | "timer_time" | "power_weight_ratio" | "left_platform_center_offset" | "right_platform_center_offset" | "left_power_phase_start_angle" | "right_power_phase_start_angle" | "left_power_phase_finish_angle" | "right_power_phase_finish_angle" | "gears" | "pace" | "training_effect" | "vertical_oscillation" | "vertical_ratio" | "ground_contact_time" | "left_ground_contact_time_balance" | "right_ground_contact_time_balance" | "stride_length" | "running_cadence" | "performance_condition" | "course_type" | "time_in_power_zone" | "navigation_turn" | "course_location" | "navigation_location" | "compass" | "gear_combo" | "muscle_oxygen" | "icon" | "compass_heading" | "gps_heading" | "gps_elevation" | "anaerobic_training_effect" | "course" | "off_course" | "glide_ratio" | "vertical_distance" | "vmg" | "ambient_pressure" | "pressure" | "vam";
export type AutoActivityDetect = "none" | "running" | "cycling" | "swimming" | "walking" | "elliptical" | "sedentary";
export type SupportedExdScreenLayouts = 0 | "full_screen" | "half_vertical" | "half_horizontal" | "half_vertical_right_split" | "half_horizontal_bottom_split" | "full_quarter_split" | "half_vertical_left_split" | "half_horizontal_top_split";
export type FitBaseType = "enum" | "sint8" | "uint8" | "string" | "uint8z" | "byte" | "sint16" | "uint16" | "sint32" | "uint32" | "float32" | "float64" | "uint16z" | "uint32z" | "sint64" | "uint64" | "uint64z";
export type TurnType = "arriving_idx" | "arriving_left_idx" | "arriving_right_idx" | "arriving_via_idx" | "arriving_via_left_idx" | "arriving_via_right_idx" | "bear_keep_left_idx" | "bear_keep_right_idx" | "continue_idx" | "exit_left_idx" | "exit_right_idx" | "ferry_idx" | "roundabout_45_idx" | "roundabout_90_idx" | "roundabout_135_idx" | "roundabout_180_idx" | "roundabout_225_idx" | "roundabout_270_idx" | "roundabout_315_idx" | "roundabout_360_idx" | "roundabout_neg_45_idx" | "roundabout_neg_90_idx" | "roundabout_neg_135_idx" | "roundabout_neg_180_idx" | "roundabout_neg_225_idx" | "roundabout_neg_270_idx" | "roundabout_neg_315_idx" | "roundabout_neg_360_idx" | "roundabout_generic_idx" | "roundabout_neg_generic_idx" | "sharp_turn_left_idx" | "sharp_turn_right_idx" | "turn_left_idx" | "turn_right_idx" | "uturn_left_idx" | "uturn_right_idx" | "icon_inv_idx" | "icon_idx_cnt";
export type BikeLightBeamAngleMode = "manual" | "auto";
export type FitBaseUnit = "other" | "kilogram" | "pound";
export type SetType = "rest" | "active";
export type ExerciseCategory = "bench_press" | "calf_raise" | "cardio" | "carry" | "chop" | "core" | "crunch" | "curl" | "deadlift" | "flye" | "hip_raise" | "hip_stability" | "hip_swing" | "hyperextension" | "lateral_raise" | "leg_curl" | "leg_raise" | "lunge" | "olympic_lift" | "plank" | "plyo" | "pull_up" | "push_up" | "row" | "shoulder_press" | "shoulder_stability" | "shrug" | "sit_up" | "squat" | "total_body" | "triceps_extension" | "warm_up" | "run" | "unknown";
export type BenchPressExerciseName = "alternating_dumbbell_chest_press_on_swiss_ball" | "barbell_bench_press" | "barbell_board_bench_press" | "barbell_floor_press" | "close_grip_barbell_bench_press" | "decline_dumbbell_bench_press" | "dumbbell_bench_press" | "dumbbell_floor_press" | "incline_barbell_bench_press" | "incline_dumbbell_bench_press" | "incline_smith_machine_bench_press" | "isometric_barbell_bench_press" | "kettlebell_chest_press" | "neutral_grip_dumbbell_bench_press" | "neutral_grip_dumbbell_incline_bench_press" | "one_arm_floor_press" | "weighted_one_arm_floor_press" | "partial_lockout" | "reverse_grip_barbell_bench_press" | "reverse_grip_incline_bench_press" | "single_arm_cable_chest_press" | "single_arm_dumbbell_bench_press" | "smith_machine_bench_press" | "swiss_ball_dumbbell_chest_press" | "triple_stop_barbell_bench_press" | "wide_grip_barbell_bench_press" | "alternating_dumbbell_chest_press";
export type CalfRaiseExerciseName = "3_way_calf_raise" | "3_way_weighted_calf_raise" | "3_way_single_leg_calf_raise" | "3_way_weighted_single_leg_calf_raise" | "donkey_calf_raise" | "weighted_donkey_calf_raise" | "seated_calf_raise" | "weighted_seated_calf_raise" | "seated_dumbbell_toe_raise" | "single_leg_bent_knee_calf_raise" | "weighted_single_leg_bent_knee_calf_raise" | "single_leg_decline_push_up" | "single_leg_donkey_calf_raise" | "weighted_single_leg_donkey_calf_raise" | "single_leg_hip_raise_with_knee_hold" | "single_leg_standing_calf_raise" | "single_leg_standing_dumbbell_calf_raise" | "standing_barbell_calf_raise" | "standing_calf_raise" | "weighted_standing_calf_raise" | "standing_dumbbell_calf_raise";
export type CardioExerciseName = "bob_and_weave_circle" | "weighted_bob_and_weave_circle" | "cardio_core_crawl" | "weighted_cardio_core_crawl" | "double_under" | "weighted_double_under" | "jump_rope" | "weighted_jump_rope" | "jump_rope_crossover" | "weighted_jump_rope_crossover" | "jump_rope_jog" | "weighted_jump_rope_jog" | "jumping_jacks" | "weighted_jumping_jacks" | "ski_moguls" | "weighted_ski_moguls" | "split_jacks" | "weighted_split_jacks" | "squat_jacks" | "weighted_squat_jacks" | "triple_under" | "weighted_triple_under";
export type CarryExerciseName = "bar_holds" | "farmers_walk" | "farmers_walk_on_toes" | "hex_dumbbell_hold" | "overhead_carry";
export type ChopExerciseName = "cable_pull_through" | "cable_rotational_lift" | "cable_woodchop" | "cross_chop_to_knee" | "weighted_cross_chop_to_knee" | "dumbbell_chop" | "half_kneeling_rotation" | "weighted_half_kneeling_rotation" | "half_kneeling_rotational_chop" | "half_kneeling_rotational_reverse_chop" | "half_kneeling_stability_chop" | "half_kneeling_stability_reverse_chop" | "kneeling_rotational_chop" | "kneeling_rotational_reverse_chop" | "kneeling_stability_chop" | "kneeling_woodchopper" | "medicine_ball_wood_chops" | "power_squat_chops" | "weighted_power_squat_chops" | "standing_rotational_chop" | "standing_split_rotational_chop" | "standing_split_rotational_reverse_chop" | "standing_stability_reverse_chop";
export type CoreExerciseName = "abs_jabs" | "weighted_abs_jabs" | "alternating_plate_reach" | "barbell_rollout" | "weighted_barbell_rollout" | "body_bar_oblique_twist" | "cable_core_press" | "cable_side_bend" | "side_bend" | "weighted_side_bend" | "crescent_circle" | "weighted_crescent_circle" | "cycling_russian_twist" | "weighted_cycling_russian_twist" | "elevated_feet_russian_twist" | "weighted_elevated_feet_russian_twist" | "half_turkish_get_up" | "kettlebell_windmill" | "kneeling_ab_wheel" | "weighted_kneeling_ab_wheel" | "modified_front_lever" | "open_knee_tucks" | "weighted_open_knee_tucks" | "side_abs_leg_lift" | "weighted_side_abs_leg_lift" | "swiss_ball_jackknife" | "weighted_swiss_ball_jackknife" | "swiss_ball_pike" | "weighted_swiss_ball_pike" | "swiss_ball_rollout" | "weighted_swiss_ball_rollout" | "triangle_hip_press" | "weighted_triangle_hip_press" | "trx_suspended_jackknife" | "weighted_trx_suspended_jackknife" | "u_boat" | "weighted_u_boat" | "windmill_switches" | "weighted_windmill_switches" | "alternating_slide_out" | "weighted_alternating_slide_out" | "ghd_back_extensions" | "weighted_ghd_back_extensions" | "overhead_walk" | "inchworm" | "weighted_modified_front_lever" | "russian_twist" | "abdominal_leg_rotations" | "arm_and_leg_extension_on_knees" | "bicycle" | "bicep_curl_with_leg_extension" | "cat_cow" | "corkscrew" | "criss_cross" | "criss_cross_with_ball" | "double_leg_stretch" | "knee_folds" | "lower_lift" | "neck_pull" | "pelvic_clocks" | "roll_over" | "roll_up" | "rolling" | "rowing_1" | "rowing_2" | "scissors" | "single_leg_circles" | "single_leg_stretch" | "snake_twist_1_and_2" | "swan" | "swimming" | "teaser" | "the_hundred";
export type CrunchExerciseName = "bicycle_crunch" | "cable_crunch" | "circular_arm_crunch" | "crossed_arms_crunch" | "weighted_crossed_arms_crunch" | "cross_leg_reverse_crunch" | "weighted_cross_leg_reverse_crunch" | "crunch_chop" | "weighted_crunch_chop" | "double_crunch" | "weighted_double_crunch" | "elbow_to_knee_crunch" | "weighted_elbow_to_knee_crunch" | "flutter_kicks" | "weighted_flutter_kicks" | "foam_roller_reverse_crunch_on_bench" | "weighted_foam_roller_reverse_crunch_on_bench" | "foam_roller_reverse_crunch_with_dumbbell" | "foam_roller_reverse_crunch_with_medicine_ball" | "frog_press" | "hanging_knee_raise_oblique_crunch" | "weighted_hanging_knee_raise_oblique_crunch" | "hip_crossover" | "weighted_hip_crossover" | "hollow_rock" | "weighted_hollow_rock" | "incline_reverse_crunch" | "weighted_incline_reverse_crunch" | "kneeling_cable_crunch" | "kneeling_cross_crunch" | "weighted_kneeling_cross_crunch" | "kneeling_oblique_cable_crunch" | "knees_to_elbow" | "leg_extensions" | "weighted_leg_extensions" | "leg_levers" | "mcgill_curl_up" | "weighted_mcgill_curl_up" | "modified_pilates_roll_up_with_ball" | "weighted_modified_pilates_roll_up_with_ball" | "pilates_crunch" | "weighted_pilates_crunch" | "pilates_roll_up_with_ball" | "weighted_pilates_roll_up_with_ball" | "raised_legs_crunch" | "weighted_raised_legs_crunch" | "reverse_crunch" | "weighted_reverse_crunch" | "reverse_crunch_on_a_bench" | "weighted_reverse_crunch_on_a_bench" | "reverse_curl_and_lift" | "weighted_reverse_curl_and_lift" | "rotational_lift" | "weighted_rotational_lift" | "seated_alternating_reverse_crunch" | "weighted_seated_alternating_reverse_crunch" | "seated_leg_u" | "weighted_seated_leg_u" | "side_to_side_crunch_and_weave" | "weighted_side_to_side_crunch_and_weave" | "single_leg_reverse_crunch" | "weighted_single_leg_reverse_crunch" | "skater_crunch_cross" | "weighted_skater_crunch_cross" | "standing_cable_crunch" | "standing_side_crunch" | "step_climb" | "weighted_step_climb" | "swiss_ball_crunch" | "swiss_ball_reverse_crunch" | "weighted_swiss_ball_reverse_crunch" | "swiss_ball_russian_twist" | "weighted_swiss_ball_russian_twist" | "swiss_ball_side_crunch" | "weighted_swiss_ball_side_crunch" | "thoracic_crunches_on_foam_roller" | "weighted_thoracic_crunches_on_foam_roller" | "triceps_crunch" | "weighted_bicycle_crunch" | "weighted_crunch" | "weighted_swiss_ball_crunch" | "toes_to_bar" | "weighted_toes_to_bar" | "crunch" | "straight_leg_crunch_with_ball";
export type CurlExerciseName = "alternating_dumbbell_biceps_curl" | "alternating_dumbbell_biceps_curl_on_swiss_ball" | "alternating_incline_dumbbell_biceps_curl" | "barbell_biceps_curl" | "barbell_reverse_wrist_curl" | "barbell_wrist_curl" | "behind_the_back_barbell_reverse_wrist_curl" | "behind_the_back_one_arm_cable_curl" | "cable_biceps_curl" | "cable_hammer_curl" | "cheating_barbell_biceps_curl" | "close_grip_ez_bar_biceps_curl" | "cross_body_dumbbell_hammer_curl" | "dead_hang_biceps_curl" | "decline_hammer_curl" | "dumbbell_biceps_curl_with_static_hold" | "dumbbell_hammer_curl" | "dumbbell_reverse_wrist_curl" | "dumbbell_wrist_curl" | "ez_bar_preacher_curl" | "forward_bend_biceps_curl" | "hammer_curl_to_press" | "incline_dumbbell_biceps_curl" | "incline_offset_thumb_dumbbell_curl" | "kettlebell_biceps_curl" | "lying_concentration_cable_curl" | "one_arm_preacher_curl" | "plate_pinch_curl" | "preacher_curl_with_cable" | "reverse_ez_bar_curl" | "reverse_grip_wrist_curl" | "reverse_grip_barbell_biceps_curl" | "seated_alternating_dumbbell_biceps_curl" | "seated_dumbbell_biceps_curl" | "seated_reverse_dumbbell_curl" | "split_stance_offset_pinky_dumbbell_curl" | "standing_alternating_dumbbell_curls" | "standing_dumbbell_biceps_curl" | "standing_ez_bar_biceps_curl" | "static_curl" | "swiss_ball_dumbbell_overhead_triceps_extension" | "swiss_ball_ez_bar_preacher_curl" | "twisting_standing_dumbbell_biceps_curl" | "wide_grip_ez_bar_biceps_curl";
export type DeadliftExerciseName = "barbell_deadlift" | "barbell_straight_leg_deadlift" | "dumbbell_deadlift" | "dumbbell_single_leg_deadlift_to_row" | "dumbbell_straight_leg_deadlift" | "kettlebell_floor_to_shelf" | "one_arm_one_leg_deadlift" | "rack_pull" | "rotational_dumbbell_straight_leg_deadlift" | "single_arm_deadlift" | "single_leg_barbell_deadlift" | "single_leg_barbell_straight_leg_deadlift" | "single_leg_deadlift_with_barbell" | "single_leg_rdl_circuit" | "single_leg_romanian_deadlift_with_dumbbell" | "sumo_deadlift" | "sumo_deadlift_high_pull" | "trap_bar_deadlift" | "wide_grip_barbell_deadlift";
export type FlyeExerciseName = "cable_crossover" | "decline_dumbbell_flye" | "dumbbell_flye" | "incline_dumbbell_flye" | "kettlebell_flye" | "kneeling_rear_flye" | "single_arm_standing_cable_reverse_flye" | "swiss_ball_dumbbell_flye" | "arm_rotations" | "hug_a_tree";
export type HipRaiseExerciseName = "barbell_hip_thrust_on_floor" | "barbell_hip_thrust_with_bench" | "bent_knee_swiss_ball_reverse_hip_raise" | "weighted_bent_knee_swiss_ball_reverse_hip_raise" | "bridge_with_leg_extension" | "weighted_bridge_with_leg_extension" | "clam_bridge" | "front_kick_tabletop" | "weighted_front_kick_tabletop" | "hip_extension_and_cross" | "weighted_hip_extension_and_cross" | "hip_raise" | "weighted_hip_raise" | "hip_raise_with_feet_on_swiss_ball" | "weighted_hip_raise_with_feet_on_swiss_ball" | "hip_raise_with_head_on_bosu_ball" | "weighted_hip_raise_with_head_on_bosu_ball" | "hip_raise_with_head_on_swiss_ball" | "weighted_hip_raise_with_head_on_swiss_ball" | "hip_raise_with_knee_squeeze" | "weighted_hip_raise_with_knee_squeeze" | "incline_rear_leg_extension" | "weighted_incline_rear_leg_extension" | "kettlebell_swing" | "marching_hip_raise" | "weighted_marching_hip_raise" | "marching_hip_raise_with_feet_on_a_swiss_ball" | "weighted_marching_hip_raise_with_feet_on_a_swiss_ball" | "reverse_hip_raise" | "weighted_reverse_hip_raise" | "single_leg_hip_raise" | "weighted_single_leg_hip_raise" | "single_leg_hip_raise_with_foot_on_bench" | "weighted_single_leg_hip_raise_with_foot_on_bench" | "single_leg_hip_raise_with_foot_on_bosu_ball" | "weighted_single_leg_hip_raise_with_foot_on_bosu_ball" | "single_leg_hip_raise_with_foot_on_foam_roller" | "weighted_single_leg_hip_raise_with_foot_on_foam_roller" | "single_leg_hip_raise_with_foot_on_medicine_ball" | "weighted_single_leg_hip_raise_with_foot_on_medicine_ball" | "single_leg_hip_raise_with_head_on_bosu_ball" | "weighted_single_leg_hip_raise_with_head_on_bosu_ball" | "weighted_clam_bridge" | "single_leg_swiss_ball_hip_raise_and_leg_curl" | "clams" | "inner_thigh_circles" | "inner_thigh_side_lift" | "leg_circles" | "leg_lift" | "leg_lift_in_external_rotation";
export type HipStability_ExerciseName = "band_side_lying_leg_raise" | "dead_bug" | "weighted_dead_bug" | "external_hip_raise" | "weighted_external_hip_raise" | "fire_hydrant_kicks" | "weighted_fire_hydrant_kicks" | "hip_circles" | "weighted_hip_circles" | "inner_thigh_lift" | "weighted_inner_thigh_lift" | "lateral_walks_with_band_at_ankles" | "pretzel_side_kick" | "weighted_pretzel_side_kick" | "prone_hip_internal_rotation" | "weighted_prone_hip_internal_rotation" | "quadruped" | "quadruped_hip_extension" | "weighted_quadruped_hip_extension" | "quadruped_with_leg_lift" | "weighted_quadruped_with_leg_lift" | "side_lying_leg_raise" | "weighted_side_lying_leg_raise" | "sliding_hip_adduction" | "weighted_sliding_hip_adduction" | "standing_adduction" | "weighted_standing_adduction" | "standing_cable_hip_abduction" | "standing_hip_abduction" | "weighted_standing_hip_abduction" | "standing_rear_leg_raise" | "weighted_standing_rear_leg_raise" | "supine_hip_internal_rotation" | "weighted_supine_hip_internal_rotation";
export type HipSwingExcerciseName = "single_arm_kettlebell_swing" | "single_arm_dumbbell_swing" | "step_out_swing";
export type HyperextensionExercise_name = "back_extension_with_opposite_arm_and_leg_reach" | "weighted_back_extension_with_opposite_arm_and_leg_reach" | "base_rotations" | "weighted_base_rotations" | "bent_knee_reverse_hyperextension" | "weighted_bent_knee_reverse_hyperextension" | "hollow_hold_and_roll" | "weighted_hollow_hold_and_roll" | "kicks" | "weighted_kicks" | "knee_raises" | "weighted_knee_raises" | "kneeling_superman" | "weighted_kneeling_superman" | "lat_pull_down_with_row" | "medicine_ball_deadlift_to_reach" | "one_arm_one_leg_row" | "one_arm_row_with_band" | "overhead_lunge_with_medicine_ball" | "plank_knee_tucks" | "weighted_plank_knee_tucks" | "side_step" | "weighted_side_step" | "single_leg_back_extension" | "weighted_single_leg_back_extension" | "spine_extension" | "weighted_spine_extension" | "static_back_extension" | "weighted_static_back_extension" | "superman_from_floor" | "weighted_superman_from_floor" | "swiss_ball_back_extension" | "weighted_swiss_ball_back_extension" | "swiss_ball_hyperextension" | "weighted_swiss_ball_hyperextension" | "swiss_ball_opposite_arm_and_leg_lift" | "weighted_swiss_ball_opposite_arm_and_leg_lift" | "superman_on_swiss_ball" | "cobra" | "supine_floor_barre";
export type LateralRaiseExerciseName = "45_degree_cable_external_rotation" | "alternating_lateral_raise_with_static_hold" | "bar_muscle_up" | "bent_over_lateral_raise" | "cable_diagonal_raise" | "cable_front_raise" | "calorie_row" | "combo_shoulder_raise" | "dumbbell_diagonal_raise" | "dumbbell_v_raise" | "front_raise" | "leaning_dumbbell_lateral_raise" | "lying_dumbbell_raise" | "muscle_up" | "one_arm_cable_lateral_raise" | "overhand_grip_rear_lateral_raise" | "plate_raises" | "ring_dip" | "weighted_ring_dip" | "ring_muscle_up" | "weighted_ring_muscle_up" | "rope_climb" | "weighted_rope_climb" | "scaption" | "seated_lateral_raise" | "seated_rear_lateral_raise" | "side_lying_lateral_raise" | "standing_lift" | "suspended_row" | "underhand_grip_rear_lateral_raise" | "wall_slide" | "weighted_wall_slide" | "arm_circles" | "shaving_the_head";
export type LegCurlExerciseName = "leg_curl" | "weighted_leg_curl" | "good_morning" | "seated_barbell_good_morning" | "single_leg_barbell_good_morning" | "single_leg_sliding_leg_curl" | "sliding_leg_curl" | "split_barbell_good_morning" | "split_stance_extension" | "staggered_stance_good_morning" | "swiss_ball_hip_raise_and_leg_curl" | "zercher_good_morning";
export type LegRaiseExerciseName = "hanging_knee_raise" | "hanging_leg_raise" | "weighted_hanging_leg_raise" | "hanging_single_leg_raise" | "weighted_hanging_single_leg_raise" | "kettlebell_leg_raises" | "leg_lowering_drill" | "weighted_leg_lowering_drill" | "lying_straight_leg_raise" | "weighted_lying_straight_leg_raise" | "medicine_ball_leg_drops" | "quadruped_leg_raise" | "weighted_quadruped_leg_raise" | "reverse_leg_raise" | "weighted_reverse_leg_raise" | "reverse_leg_raise_on_swiss_ball" | "weighted_reverse_leg_raise_on_swiss_ball" | "single_leg_lowering_drill" | "weighted_single_leg_lowering_drill" | "weighted_hanging_knee_raise" | "lateral_stepover" | "weighted_lateral_stepover";
export type LungeExerciseName = "overhead_lunge" | "lunge_matrix" | "weighted_lunge_matrix" | "alternating_barbell_forward_lunge" | "alternating_dumbbell_lunge_with_reach" | "back_foot_elevated_dumbbell_split_squat" | "barbell_box_lunge" | "barbell_bulgarian_split_squat" | "barbell_crossover_lunge" | "barbell_front_split_squat" | "barbell_lunge" | "barbell_reverse_lunge" | "barbell_side_lunge" | "barbell_split_squat" | "core_control_rear_lunge" | "diagonal_lunge" | "drop_lunge" | "dumbbell_box_lunge" | "dumbbell_bulgarian_split_squat" | "dumbbell_crossover_lunge" | "dumbbell_diagonal_lunge" | "dumbbell_lunge" | "dumbbell_lunge_and_rotation" | "dumbbell_overhead_bulgarian_split_squat" | "dumbbell_reverse_lunge_to_high_knee_and_press" | "dumbbell_side_lunge" | "elevated_front_foot_barbell_split_squat" | "front_foot_elevated_dumbbell_split_squat" | "gunslinger_lunge" | "lawnmower_lunge" | "low_lunge_with_isometric_adduction" | "low_side_to_side_lunge" | "lunge" | "weighted_lunge" | "lunge_with_arm_reach" | "lunge_with_diagonal_reach" | "lunge_with_side_bend" | "offset_dumbbell_lunge" | "offset_dumbbell_reverse_lunge" | "overhead_bulgarian_split_squat" | "overhead_dumbbell_reverse_lunge" | "overhead_dumbbell_split_squat" | "overhead_lunge_with_rotation" | "reverse_barbell_box_lunge" | "reverse_box_lunge" | "reverse_dumbbell_box_lunge" | "reverse_dumbbell_crossover_lunge" | "reverse_dumbbell_diagonal_lunge" | "reverse_lunge_with_reach_back" | "weighted_reverse_lunge_with_reach_back" | "reverse_lunge_with_twist_and_overhead_reach" | "weighted_reverse_lunge_with_twist_and_overhead_reach" | "reverse_sliding_box_lunge" | "weighted_reverse_sliding_box_lunge" | "reverse_sliding_lunge" | "weighted_reverse_sliding_lunge" | "runners_lunge_to_balance" | "weighted_runners_lunge_to_balance" | "shifting_side_lunge" | "side_and_crossover_lunge" | "weighted_side_and_crossover_lunge" | "side_lunge" | "weighted_side_lunge" | "side_lunge_and_press" | "side_lunge_jump_off" | "side_lunge_sweep" | "weighted_side_lunge_sweep" | "side_lunge_to_crossover_tap" | "weighted_side_lunge_to_crossover_tap" | "side_to_side_lunge_chops" | "weighted_side_to_side_lunge_chops" | "siff_jump_lunge" | "weighted_siff_jump_lunge" | "single_arm_reverse_lunge_and_press" | "sliding_lateral_lunge" | "weighted_sliding_lateral_lunge" | "walking_barbell_lunge" | "walking_dumbbell_lunge" | "walking_lunge" | "weighted_walking_lunge" | "wide_grip_overhead_barbell_split_squat";
export type OlympicLiftExercise_name = "barbell_hang_power_clean" | "barbell_hang_squat_clean" | "barbell_power_clean" | "barbell_power_snatch" | "barbell_squat_clean" | "clean_and_jerk" | "barbell_hang_power_snatch" | "barbell_hang_pull" | "barbell_high_pull" | "barbell_snatch" | "barbell_split_jerk" | "clean" | "dumbbell_clean" | "dumbbell_hang_pull" | "one_hand_dumbbell_split_snatch" | "push_jerk" | "single_arm_dumbbell_snatch" | "single_arm_hang_snatch" | "single_arm_kettlebell_snatch" | "split_jerk" | "squat_clean_and_jerk";
export type PlankExerciseName = "45_degree_plank" | "weighted_45_degree_plank" | "90_degree_static_hold" | "weighted_90_degree_static_hold" | "bear_crawl" | "weighted_bear_crawl" | "cross_body_mountain_climber" | "weighted_cross_body_mountain_climber" | "elbow_plank_pike_jacks" | "weighted_elbow_plank_pike_jacks" | "elevated_feet_plank" | "weighted_elevated_feet_plank" | "elevator_abs" | "weighted_elevator_abs" | "extended_plank" | "weighted_extended_plank" | "full_plank_passe_twist" | "weighted_full_plank_passe_twist" | "inching_elbow_plank" | "weighted_inching_elbow_plank" | "inchworm_to_side_plank" | "weighted_inchworm_to_side_plank" | "kneeling_plank" | "weighted_kneeling_plank" | "kneeling_side_plank_with_leg_lift" | "weighted_kneeling_side_plank_with_leg_lift" | "lateral_roll" | "weighted_lateral_roll" | "lying_reverse_plank" | "weighted_lying_reverse_plank" | "medicine_ball_mountain_climber" | "weighted_medicine_ball_mountain_climber" | "modified_mountain_climber_and_extension" | "weighted_modified_mountain_climber_and_extension" | "mountain_climber" | "weighted_mountain_climber" | "mountain_climber_on_sliding_discs" | "weighted_mountain_climber_on_sliding_discs" | "mountain_climber_with_feet_on_bosu_ball" | "weighted_mountain_climber_with_feet_on_bosu_ball" | "mountain_climber_with_hands_on_bench" | "mountain_climber_with_hands_on_swiss_ball" | "weighted_mountain_climber_with_hands_on_swiss_ball" | "plank" | "plank_jacks_with_feet_on_sliding_discs" | "weighted_plank_jacks_with_feet_on_sliding_discs" | "plank_knee_twist" | "weighted_plank_knee_twist" | "plank_pike_jumps" | "weighted_plank_pike_jumps" | "plank_pikes" | "weighted_plank_pikes" | "plank_to_stand_up" | "weighted_plank_to_stand_up" | "plank_with_arm_raise" | "weighted_plank_with_arm_raise" | "plank_with_knee_to_elbow" | "weighted_plank_with_knee_to_elbow" | "plank_with_oblique_crunch" | "weighted_plank_with_oblique_crunch" | "plyometric_side_plank" | "weighted_plyometric_side_plank" | "rolling_side_plank" | "weighted_rolling_side_plank" | "side_kick_plank" | "weighted_side_kick_plank" | "side_plank" | "weighted_side_plank" | "side_plank_and_row" | "weighted_side_plank_and_row" | "side_plank_lift" | "weighted_side_plank_lift" | "side_plank_with_elbow_on_bosu_ball" | "weighted_side_plank_with_elbow_on_bosu_ball" | "side_plank_with_feet_on_bench" | "weighted_side_plank_with_feet_on_bench" | "side_plank_with_knee_circle" | "weighted_side_plank_with_knee_circle" | "side_plank_with_knee_tuck" | "weighted_side_plank_with_knee_tuck" | "side_plank_with_leg_lift" | "weighted_side_plank_with_leg_lift" | "side_plank_with_reach_under" | "weighted_side_plank_with_reach_under" | "single_leg_elevated_feet_plank" | "weighted_single_leg_elevated_feet_plank" | "single_leg_flex_and_extend" | "weighted_single_leg_flex_and_extend" | "single_leg_side_plank" | "weighted_single_leg_side_plank" | "spiderman_plank" | "weighted_spiderman_plank" | "straight_arm_plank" | "weighted_straight_arm_plank" | "straight_arm_plank_with_shoulder_touch" | "weighted_straight_arm_plank_with_shoulder_touch" | "swiss_ball_plank" | "weighted_swiss_ball_plank" | "swiss_ball_plank_leg_lift" | "weighted_swiss_ball_plank_leg_lift" | "swiss_ball_plank_leg_lift_and_hold" | "swiss_ball_plank_with_feet_on_bench" | "weighted_swiss_ball_plank_with_feet_on_bench" | "swiss_ball_prone_jackknife" | "weighted_swiss_ball_prone_jackknife" | "swiss_ball_side_plank" | "weighted_swiss_ball_side_plank" | "three_way_plank" | "weighted_three_way_plank" | "towel_plank_and_knee_in" | "weighted_towel_plank_and_knee_in" | "t_stabilization" | "weighted_t_stabilization" | "turkish_get_up_to_side_plank" | "weighted_turkish_get_up_to_side_plank" | "two_point_plank" | "weighted_two_point_plank" | "weighted_plank" | "wide_stance_plank_with_diagonal_arm_lift" | "weighted_wide_stance_plank_with_diagonal_arm_lift" | "wide_stance_plank_with_diagonal_leg_lift" | "weighted_wide_stance_plank_with_diagonal_leg_lift" | "wide_stance_plank_with_leg_lift" | "weighted_wide_stance_plank_with_leg_lift" | "wide_stance_plank_with_opposite_arm_and_leg_lift" | "weighted_mountain_climber_with_hands_on_bench" | "weighted_swiss_ball_plank_leg_lift_and_hold" | "weighted_wide_stance_plank_with_opposite_arm_and_leg_lift" | "plank_with_feet_on_swiss_ball" | "side_plank_to_plank_with_reach_under" | "bridge_with_glute_lower_lift" | "bridge_one_leg_bridge" | "plank_with_arm_variations" | "plank_with_leg_lift" | "reverse_plank_with_leg_pull";
export type PlyoExerciseName = "alternating_jump_lunge" | "weighted_alternating_jump_lunge" | "barbell_jump_squat" | "body_weight_jump_squat" | "weighted_jump_squat" | "cross_knee_strike" | "weighted_cross_knee_strike" | "depth_jump" | "weighted_depth_jump" | "dumbbell_jump_squat" | "dumbbell_split_jump" | "front_knee_strike" | "weighted_front_knee_strike" | "high_box_jump" | "weighted_high_box_jump" | "isometric_explosive_body_weight_jump_squat" | "weighted_isometric_explosive_jump_squat" | "lateral_leap_and_hop" | "weighted_lateral_leap_and_hop" | "lateral_plyo_squats" | "weighted_lateral_plyo_squats" | "lateral_slide" | "weighted_lateral_slide" | "medicine_ball_overhead_throws" | "medicine_ball_side_throw" | "medicine_ball_slam" | "side_to_side_medicine_ball_throws" | "side_to_side_shuffle_jump" | "weighted_side_to_side_shuffle_jump" | "squat_jump_onto_box" | "weighted_squat_jump_onto_box" | "squat_jumps_in_and_out" | "weighted_squat_jumps_in_and_out";
export type PullUpExerciseName = "banded_pull_ups" | "30_degree_lat_pulldown" | "band_assisted_chin_up" | "close_grip_chin_up" | "weighted_close_grip_chin_up" | "close_grip_lat_pulldown" | "crossover_chin_up" | "weighted_crossover_chin_up" | "ez_bar_pullover" | "hanging_hurdle" | "weighted_hanging_hurdle" | "kneeling_lat_pulldown" | "kneeling_underhand_grip_lat_pulldown" | "lat_pulldown" | "mixed_grip_chin_up" | "weighted_mixed_grip_chin_up" | "mixed_grip_pull_up" | "weighted_mixed_grip_pull_up" | "reverse_grip_pulldown" | "standing_cable_pullover" | "straight_arm_pulldown" | "swiss_ball_ez_bar_pullover" | "towel_pull_up" | "weighted_towel_pull_up" | "weighted_pull_up" | "wide_grip_lat_pulldown" | "wide_grip_pull_up" | "weighted_wide_grip_pull_up" | "burpee_pull_up" | "weighted_burpee_pull_up" | "jumping_pull_ups" | "weighted_jumping_pull_ups" | "kipping_pull_up" | "weighted_kipping_pull_up" | "l_pull_up" | "weighted_l_pull_up" | "suspended_chin_up" | "weighted_suspended_chin_up" | "pull_up";
export type PushUpExerciseName = "chest_press_with_band" | "alternating_staggered_push_up" | "weighted_alternating_staggered_push_up" | "alternating_hands_medicine_ball_push_up" | "weighted_alternating_hands_medicine_ball_push_up" | "bosu_ball_push_up" | "weighted_bosu_ball_push_up" | "clapping_push_up" | "weighted_clapping_push_up" | "close_grip_medicine_ball_push_up" | "weighted_close_grip_medicine_ball_push_up" | "close_hands_push_up" | "weighted_close_hands_push_up" | "decline_push_up" | "weighted_decline_push_up" | "diamond_push_up" | "weighted_diamond_push_up" | "explosive_crossover_push_up" | "weighted_explosive_crossover_push_up" | "explosive_push_up" | "weighted_explosive_push_up" | "feet_elevated_side_to_side_push_up" | "weighted_feet_elevated_side_to_side_push_up" | "hand_release_push_up" | "weighted_hand_release_push_up" | "handstand_push_up" | "weighted_handstand_push_up" | "incline_push_up" | "weighted_incline_push_up" | "isometric_explosive_push_up" | "weighted_isometric_explosive_push_up" | "judo_push_up" | "weighted_judo_push_up" | "kneeling_push_up" | "weighted_kneeling_push_up" | "medicine_ball_chest_pass" | "medicine_ball_push_up" | "weighted_medicine_ball_push_up" | "one_arm_push_up" | "weighted_one_arm_push_up" | "weighted_push_up" | "push_up_and_row" | "weighted_push_up_and_row" | "push_up_plus" | "weighted_push_up_plus" | "push_up_with_feet_on_swiss_ball" | "weighted_push_up_with_feet_on_swiss_ball" | "push_up_with_one_hand_on_medicine_ball" | "weighted_push_up_with_one_hand_on_medicine_ball" | "shoulder_push_up" | "weighted_shoulder_push_up" | "single_arm_medicine_ball_push_up" | "weighted_single_arm_medicine_ball_push_up" | "spiderman_push_up" | "weighted_spiderman_push_up" | "stacked_feet_push_up" | "weighted_stacked_feet_push_up" | "staggered_hands_push_up" | "weighted_staggered_hands_push_up" | "suspended_push_up" | "weighted_suspended_push_up" | "swiss_ball_push_up" | "weighted_swiss_ball_push_up" | "swiss_ball_push_up_plus" | "weighted_swiss_ball_push_up_plus" | "t_push_up" | "weighted_t_push_up" | "triple_stop_push_up" | "weighted_triple_stop_push_up" | "wide_hands_push_up" | "weighted_wide_hands_push_up" | "parallette_handstand_push_up" | "weighted_parallette_handstand_push_up" | "ring_handstand_push_up" | "weighted_ring_handstand_push_up" | "ring_push_up" | "weighted_ring_push_up" | "push_up" | "pilates_pushup";
export type RowExerciseName = "barbell_straight_leg_deadlift_to_row" | "cable_row_standing" | "dumbbell_row" | "elevated_feet_inverted_row" | "weighted_elevated_feet_inverted_row" | "face_pull" | "face_pull_with_external_rotation" | "inverted_row_with_feet_on_swiss_ball" | "weighted_inverted_row_with_feet_on_swiss_ball" | "kettlebell_row" | "modified_inverted_row" | "weighted_modified_inverted_row" | "neutral_grip_alternating_dumbbell_row" | "one_arm_bent_over_row" | "one_legged_dumbbell_row" | "renegade_row" | "reverse_grip_barbell_row" | "rope_handle_cable_row" | "seated_cable_row" | "seated_dumbbell_row" | "single_arm_cable_row" | "single_arm_cable_row_and_rotation" | "single_arm_inverted_row" | "weighted_single_arm_inverted_row" | "single_arm_neutral_grip_dumbbell_row" | "single_arm_neutral_grip_dumbbell_row_and_rotation" | "suspended_inverted_row" | "weighted_suspended_inverted_row" | "t_bar_row" | "towel_grip_inverted_row" | "weighted_towel_grip_inverted_row" | "underhand_grip_cable_row" | "v_grip_cable_row" | "wide_grip_seated_cable_row";
export type ShoulderPressExerciseName = "alternating_dumbbell_shoulder_press" | "arnold_press" | "barbell_front_squat_to_push_press" | "barbell_push_press" | "barbell_shoulder_press" | "dead_curl_press" | "dumbbell_alternating_shoulder_press_and_twist" | "dumbbell_hammer_curl_to_lunge_to_press" | "dumbbell_push_press" | "floor_inverted_shoulder_press" | "weighted_floor_inverted_shoulder_press" | "inverted_shoulder_press" | "weighted_inverted_shoulder_press" | "one_arm_push_press" | "overhead_barbell_press" | "overhead_dumbbell_press" | "seated_barbell_shoulder_press" | "seated_dumbbell_shoulder_press" | "single_arm_dumbbell_shoulder_press" | "single_arm_step_up_and_press" | "smith_machine_overhead_press" | "split_stance_hammer_curl_to_press" | "swiss_ball_dumbbell_shoulder_press" | "weight_plate_front_raise";
export type ShoulderStabilityExerciseName = "90_degree_cable_external_rotation" | "band_external_rotation" | "band_internal_rotation" | "bent_arm_lateral_raise_and_external_rotation" | "cable_external_rotation" | "dumbbell_face_pull_with_external_rotation" | "floor_i_raise" | "weighted_floor_i_raise" | "floor_t_raise" | "weighted_floor_t_raise" | "floor_y_raise" | "weighted_floor_y_raise" | "incline_i_raise" | "weighted_incline_i_raise" | "incline_l_raise" | "weighted_incline_l_raise" | "incline_t_raise" | "weighted_incline_t_raise" | "incline_w_raise" | "weighted_incline_w_raise" | "incline_y_raise" | "weighted_incline_y_raise" | "lying_external_rotation" | "seated_dumbbell_external_rotation" | "standing_l_raise" | "swiss_ball_i_raise" | "weighted_swiss_ball_i_raise" | "swiss_ball_t_raise" | "weighted_swiss_ball_t_raise" | "swiss_ball_w_raise" | "weighted_swiss_ball_w_raise" | "swiss_ball_y_raise" | "weighted_swiss_ball_y_raise";
export type ShrugExerciseName = "barbell_jump_shrug" | "barbell_shrug" | "barbell_upright_row" | "behind_the_back_smith_machine_shrug" | "dumbbell_jump_shrug" | "dumbbell_shrug" | "dumbbell_upright_row" | "incline_dumbbell_shrug" | "overhead_barbell_shrug" | "overhead_dumbbell_shrug" | "scaption_and_shrug" | "scapular_retraction" | "serratus_chair_shrug" | "weighted_serratus_chair_shrug" | "serratus_shrug" | "weighted_serratus_shrug" | "wide_grip_jump_shrug";
export type SitUpExerciseName = "alternating_sit_up" | "weighted_alternating_sit_up" | "bent_knee_v_up" | "weighted_bent_knee_v_up" | "butterfly_sit_up" | "weighted_butterfly_situp" | "cross_punch_roll_up" | "weighted_cross_punch_roll_up" | "crossed_arms_sit_up" | "weighted_crossed_arms_sit_up" | "get_up_sit_up" | "weighted_get_up_sit_up" | "hovering_sit_up" | "weighted_hovering_sit_up" | "kettlebell_sit_up" | "medicine_ball_alternating_v_up" | "medicine_ball_sit_up" | "medicine_ball_v_up" | "modified_sit_up" | "negative_sit_up" | "one_arm_full_sit_up" | "reclining_circle" | "weighted_reclining_circle" | "reverse_curl_up" | "weighted_reverse_curl_up" | "single_leg_swiss_ball_jackknife" | "weighted_single_leg_swiss_ball_jackknife" | "the_teaser" | "the_teaser_weighted" | "three_part_roll_down" | "weighted_three_part_roll_down" | "v_up" | "weighted_v_up" | "weighted_russian_twist_on_swiss_ball" | "weighted_sit_up" | "x_abs" | "weighted_x_abs" | "sit_up";
export type SquatExerciseName = "leg_press" | "back_squat_with_body_bar" | "back_squats" | "weighted_back_squats" | "balancing_squat" | "weighted_balancing_squat" | "barbell_back_squat" | "barbell_box_squat" | "barbell_front_squat" | "barbell_hack_squat" | "barbell_hang_squat_snatch" | "barbell_lateral_step_up" | "barbell_quarter_squat" | "barbell_siff_squat" | "barbell_squat_snatch" | "barbell_squat_with_heels_raised" | "barbell_stepover" | "barbell_step_up" | "bench_squat_with_rotational_chop" | "weighted_bench_squat_with_rotational_chop" | "body_weight_wall_squat" | "weighted_wall_squat" | "box_step_squat" | "weighted_box_step_squat" | "braced_squat" | "crossed_arm_barbell_front_squat" | "crossover_dumbbell_step_up" | "dumbbell_front_squat" | "dumbbell_split_squat" | "dumbbell_squat" | "dumbbell_squat_clean" | "dumbbell_stepover" | "dumbbell_step_up" | "elevated_single_leg_squat" | "weighted_elevated_single_leg_squat" | "figure_four_squats" | "weighted_figure_four_squats" | "goblet_squat" | "kettlebell_squat" | "kettlebell_swing_overhead" | "kettlebell_swing_with_flip_to_squat" | "lateral_dumbbell_step_up" | "one_legged_squat" | "overhead_dumbbell_squat" | "overhead_squat" | "partial_single_leg_squat" | "weighted_partial_single_leg_squat" | "pistol_squat" | "weighted_pistol_squat" | "plie_slides" | "weighted_plie_slides" | "plie_squat" | "weighted_plie_squat" | "prisoner_squat" | "weighted_prisoner_squat" | "single_leg_bench_get_up" | "weighted_single_leg_bench_get_up" | "single_leg_bench_squat" | "weighted_single_leg_bench_squat" | "single_leg_squat_on_swiss_ball" | "weighted_single_leg_squat_on_swiss_ball" | "squat" | "weighted_squat" | "squats_with_band" | "staggered_squat" | "weighted_staggered_squat" | "step_up" | "weighted_step_up" | "suitcase_squats" | "sumo_squat" | "sumo_squat_slide_in" | "weighted_sumo_squat_slide_in" | "sumo_squat_to_high_pull" | "sumo_squat_to_stand" | "weighted_sumo_squat_to_stand" | "sumo_squat_with_rotation" | "weighted_sumo_squat_with_rotation" | "swiss_ball_body_weight_wall_squat" | "weighted_swiss_ball_wall_squat" | "thrusters" | "uneven_squat" | "weighted_uneven_squat" | "waist_slimming_squat" | "wall_ball" | "wide_stance_barbell_squat" | "wide_stance_goblet_squat" | "zercher_squat" | "kbs_overhead" | "squat_and_side_kick" | "squat_jumps_in_n_out" | "pilates_plie_squats_parallel_turned_out_flat_and_heels" | "releve_straight_leg_and_knee_bent_with_one_leg_variation";
export type TotalBodyExerciseName = "burpee" | "weighted_burpee" | "burpee_box_jump" | "weighted_burpee_box_jump" | "high_pull_burpee" | "man_makers" | "one_arm_burpee" | "squat_thrusts" | "weighted_squat_thrusts" | "squat_plank_push_up" | "weighted_squat_plank_push_up" | "standing_t_rotation_balance" | "weighted_standing_t_rotation_balance";
export type TricepsExtensionExerciseName = "bench_dip" | "weighted_bench_dip" | "body_weight_dip" | "cable_kickback" | "cable_lying_triceps_extension" | "cable_overhead_triceps_extension" | "dumbbell_kickback" | "dumbbell_lying_triceps_extension" | "ez_bar_overhead_triceps_extension" | "incline_dip" | "weighted_incline_dip" | "incline_ez_bar_lying_triceps_extension" | "lying_dumbbell_pullover_to_extension" | "lying_ez_bar_triceps_extension" | "lying_triceps_extension_to_close_grip_bench_press" | "overhead_dumbbell_triceps_extension" | "reclining_triceps_press" | "reverse_grip_pressdown" | "reverse_grip_triceps_pressdown" | "rope_pressdown" | "seated_barbell_overhead_triceps_extension" | "seated_dumbbell_overhead_triceps_extension" | "seated_ez_bar_overhead_triceps_extension" | "seated_single_arm_overhead_dumbbell_extension" | "single_arm_dumbbell_overhead_triceps_extension" | "single_dumbbell_seated_overhead_triceps_extension" | "single_leg_bench_dip_and_kick" | "weighted_single_leg_bench_dip_and_kick" | "single_leg_dip" | "weighted_single_leg_dip" | "static_lying_triceps_extension" | "suspended_dip" | "weighted_suspended_dip" | "swiss_ball_dumbbell_lying_triceps_extension" | "swiss_ball_ez_bar_lying_triceps_extension" | "swiss_ball_ez_bar_overhead_triceps_extension" | "tabletop_dip" | "weighted_tabletop_dip" | "triceps_extension_on_floor" | "triceps_pressdown" | "weighted_dip";
export type WarmUpxerciseName = "quadruped_rocking" | "neck_tilts" | "ankle_circles" | "ankle_dorsiflexion_with_band" | "ankle_internal_rotation" | "arm_circles" | "bent_over_reach_to_sky" | "cat_camel" | "elbow_to_foot_lunge" | "forward_and_backward_leg_swings" | "groiners" | "inverted_hamstring_stretch" | "lateral_duck_under" | "neck_rotations" | "opposite_arm_and_leg_balance" | "reach_roll_and_lift" | "scorpion" | "shoulder_circles" | "side_to_side_leg_swings" | "sleeper_stretch" | "slide_out" | "swiss_ball_hip_crossover" | "swiss_ball_reach_roll_and_lift" | "swiss_ball_windshield_wipers" | "thoracic_rotation" | "walking_high_kicks" | "walking_high_knees" | "walking_knee_hugs" | "walking_leg_cradles" | "walkout" | "walkout_from_push_up_position";
export type RunExerciseName = "run" | "walk" | "jog" | "sprint";
export type WaterType = "fresh" | "salt" | "en13319" | "custom";
export type TissueModelType = "zhl_16c";
export type DiveGasStatus = "disabled" | "enabled" | "backup_only";
export type DiveAlarmType = "depth" | "time";
export type DiveBacklightMode = "at_depth" | "always_on";
export type FaveroProduct = "assioma_uno" | "assioma_duo";
export interface Types {
    file: {
        [key: number]: File;
    };
    mesg_num: {
        [key: number]: MesgNum;
    };
    checksum: {
        [key: number]: Checksum;
    };
    file_flags: {
        [key: number]: FileFlags;
    };
    mesg_count: {
        [key: number]: MesgCount;
    };
    date_time: {
        [key: number]: DateTime;
    };
    local_date_time: {
        [key: number]: LocalDateTime;
    };
    message_index: {
        [key: number]: MessageIndex;
    };
    gender: {
        [key: number]: Gender;
    };
    language: {
        [key: number]: Language;
    };
    language_bits_0: {
        [key: number]: LanguageBits0;
    };
    language_bits_1: {
        [key: number]: LanguageBits1;
    };
    language_bits_2: {
        [key: number]: LanguageBits2;
    };
    language_bits_3: {
        [key: number]: LanguageBits3;
    };
    language_bits_4: {
        [key: number]: LanguageBits4;
    };
    time_zone: {
        [key: number]: TimeZone;
    };
    display_measure: {
        [key: number]: DisplayMeasure;
    };
    display_heart: {
        [key: number]: DisplayHeart;
    };
    display_power: {
        [key: number]: DisplayPower;
    };
    display_position: {
        [key: number]: DisplayPosition;
    };
    switch: {
        [key: number]: SwitchState;
    };
    sport: {
        [key: number]: SportType;
    };
    sport_bits_0: {
        [key: number]: SportBits0;
    };
    sport_bits_1: {
        [key: number]: SportBits1;
    };
    sport_bits_2: {
        [key: number]: SportBits2;
    };
    sport_bits_3: {
        [key: number]: SportBits3;
    };
    sport_bits_4: {
        [key: number]: SportBits4;
    };
    sport_bits_5: {
        [key: number]: SportBits5;
    };
    sport_bits_6: {
        [key: number]: SportBits6;
    };
    sub_sport: {
        [key: number]: SubSport;
    };
    sport_event: {
        [key: number]: SportEvent;
    };
    activity: {
        [key: number]: Activity;
    };
    intensity: {
        [key: number]: Intensity;
    };
    session_trigger: {
        [key: number]: SessionTrigger;
    };
    autolap_trigger: {
        [key: number]: AutolapTrigger;
    };
    lap_trigger: {
        [key: number]: LapTrigger;
    };
    time_mode: {
        [key: number]: TimeMode;
    };
    backlight_mode: {
        [key: number]: BacklightMode;
    };
    date_mode: {
        [key: number]: DateMode;
    };
    backlight_timeout: {
        [key: number]: BacklightTimeout;
    };
    event: {
        [key: number]: Event;
    };
    event_type: {
        [key: number]: EventType;
    };
    timer_trigger: {
        [key: number]: TimerTrigger;
    };
    fitness_equipment_state: {
        [key: number]: FitnessEquipmentState;
    };
    tone: {
        [key: number]: Tone;
    };
    autoscroll: {
        [key: number]: AutoScroll;
    };
    activity_class: {
        [key: number]: ActivityClass;
    };
    hr_zone_calc: {
        [key: number]: HRZoneCalc;
    };
    pwr_zone_calc: {
        [key: number]: PwrZoneCalc;
    };
    wkt_step_duration: {
        [key: number]: WktStepDuration;
    };
    wkt_step_target: {
        [key: number]: WktStepTarget;
    };
    goal: {
        [key: number]: Goal;
    };
    goal_recurrence: {
        [key: number]: GoalRecurrence;
    };
    goal_source: {
        [key: number]: GoalSource;
    };
    schedule: {
        [key: number]: Schedule;
    };
    course_point: {
        [key: number]: CoursePointType;
    };
    manufacturer: {
        [key: number]: Manufacturer;
    };
    garmin_product: {
        [key: number]: GarminProduct;
    };
    antplus_device_type: {
        [key: number]: ANTPlusDeviceType;
    };
    ant_network: {
        [key: number]: ANTNetwork;
    };
    workout_capabilities: {
        [key: number]: WorkoutCapabilities;
    };
    battery_status: {
        [key: number]: BatteryStatus;
    };
    hr_type: {
        [key: number]: HRType;
    };
    course_capabilities: {
        [key: number]: CourseCapabilities;
    };
    weight: {
        [key: number]: Weight;
    };
    workout_hr: {
        [key: number]: WorkoutHR;
    };
    workout_power: {
        [key: number]: WorkoutPower;
    };
    bp_status: {
        [key: number]: BPStatus;
    };
    user_local_id: {
        [key: number]: UserLocalId;
    };
    swim_stroke: {
        [key: number]: SwimStroke;
    };
    activity_type: {
        [key: number]: ActivityType;
    };
    activity_subtype: {
        [key: number]: ActivitySubtype;
    };
    activity_level: {
        [key: number]: ActivityLevel;
    };
    side: {
        [key: number]: Side;
    };
    left_right_balance: {
        [key: number]: LeftRightBalance;
    };
    left_right_balance_100: {
        [key: number]: LeftRightBalance100;
    };
    length_type: {
        [key: number]: LengthType;
    };
    day_of_week: {
        [key: number]: DayOfWeek;
    };
    connectivity_capabilities: {
        [key: number]: ConnectivityCapabilities;
    };
    weather_report: {
        [key: number]: WeatherReport;
    };
    weather_status: {
        [key: number]: WeatherStatus;
    };
    weather_severity: {
        [key: number]: WeatherSeverity;
    };
    weather_severe_type: {
        [key: number]: WeatherSevereType;
    };
    stroke_type: {
        [key: number]: StrokeType;
    };
    body_location: {
        [key: number]: BodyLocation;
    };
    segment_lap_status: {
        [key: number]: SegmentLapStatus;
    };
    segment_leaderboard_type: {
        [key: number]: SegmentLeaderboardType;
    };
    segment_delete_status: {
        [key: number]: SegmentDeleteStatus;
    };
    segment_selection_type: {
        [key: number]: SegmentSelectionType;
    };
    source_type: {
        [key: number]: SourceType;
    };
    display_orientation: {
        [key: number]: DisplayOrientation;
    };
    workout_equipment: {
        [key: number]: WorkoutEquipment;
    };
    watchface_mode: {
        [key: number]: WatchfaceMode;
    };
    digital_watchface_layout: {
        [key: number]: DigitalWatchfaceLayout;
    };
    analog_watchface_layout: {
        [key: number]: AnalogWatchfaceLayout;
    };
    rider_position_type: {
        [key: number]: RiderPositionType;
    };
    power_phase_type: {
        [key: number]: PowerPhaseType;
    };
    camera_event_type: {
        [key: number]: CameraEventType;
    };
    sensor_type: {
        [key: number]: SensorType;
    };
    bike_light_network_config_type: {
        [key: number]: BikeLightNetworkConfigType;
    };
    comm_timeout_type: {
        [key: number]: CommTimeoutType;
    };
    camera_orientation_type: {
        [key: number]: CameraOrientationType;
    };
    attitude_stage: {
        [key: number]: AttitudeStage;
    };
    attitude_validity: {
        [key: number]: AttitudeValidity;
    };
    auto_sync_frequency: {
        [key: number]: AutoSyncFrequency;
    };
    exd_layout: {
        [key: number]: ExdLayout;
    };
    exd_display_type: {
        [key: number]: ExdDisplayType;
    };
    exd_data_units: {
        [key: number]: ExdDataUnits;
    };
    exd_qualifiers: {
        [key: number]: ExdQualifiers;
    };
    exd_descriptors: {
        [key: number]: ExdDescriptors;
    };
    auto_activity_detect: {
        [key: number]: AutoActivityDetect;
    };
    supported_exd_screen_layouts: {
        [key: number]: SupportedExdScreenLayouts;
    };
    fit_base_type: {
        [key: number]: FitBaseType;
    };
    turn_type: {
        [key: number]: TurnType;
    };
    bike_light_beam_angle_mode: {
        [key: number]: BikeLightBeamAngleMode;
    };
    fit_base_unit: {
        [key: number]: FitBaseUnit;
    };
    set_type: {
        [key: number]: SetType;
    };
    exercise_category: {
        [key: number]: ExerciseCategory;
    };
    bench_press_exercise_name: {
        [key: number]: BenchPressExerciseName;
    };
    calf_raise_exercise_name: {
        [key: number]: CalfRaiseExerciseName;
    };
    cardio_exercise_name: {
        [key: number]: CardioExerciseName;
    };
    carry_exercise_name: {
        [key: number]: CarryExerciseName;
    };
    chop_exercise_name: {
        [key: number]: ChopExerciseName;
    };
    core_exercise_name: {
        [key: number]: CoreExerciseName;
    };
    crunch_exercise_name: {
        [key: number]: CrunchExerciseName;
    };
    curl_exercise_name: {
        [key: number]: CurlExerciseName;
    };
    deadlift_exercise_name: {
        [key: number]: DeadliftExerciseName;
    };
    flye_exercise_name: {
        [key: number]: FlyeExerciseName;
    };
    hip_raise_exercise_name: {
        [key: number]: HipRaiseExerciseName;
    };
    hip_stability_exercise_name: {
        [key: number]: HipStability_ExerciseName;
    };
    hip_swing_excercise_name: {
        [key: number]: HipSwingExcerciseName;
    };
    hyperextension_exercise_name: {
        [key: number]: HyperextensionExercise_name;
    };
    lateral_raise_exercise_name: {
        [key: number]: LateralRaiseExerciseName;
    };
    leg_curl_exercise_name: {
        [key: number]: LegCurlExerciseName;
    };
    leg_raise_exercise_name: {
        [key: number]: LegRaiseExerciseName;
    };
    lunge_exercise_name: {
        [key: number]: LungeExerciseName;
    };
    olympic_lift_exercise_name: {
        [key: number]: OlympicLiftExercise_name;
    };
    plank_exercise_name: {
        [key: number]: PlankExerciseName;
    };
    plyo_exercise_name: {
        [key: number]: PlyoExerciseName;
    };
    pull_up_exercise_name: {
        [key: number]: PullUpExerciseName;
    };
    push_up_exercise_name: {
        [key: number]: PushUpExerciseName;
    };
    row_exercise_name: {
        [key: number]: RowExerciseName;
    };
    shoulder_press_exercise_name: {
        [key: number]: ShoulderPressExerciseName;
    };
    shoulder_stability_exercise_name: {
        [key: number]: ShoulderStabilityExerciseName;
    };
    shrug_exercise_name: {
        [key: number]: ShrugExerciseName;
    };
    sit_up_exercise_name: {
        [key: number]: SitUpExerciseName;
    };
    squat_exercise_name: {
        [key: number]: SquatExerciseName;
    };
    total_body_exercise_name: {
        [key: number]: TotalBodyExerciseName;
    };
    triceps_extension_exercise_name: {
        [key: number]: TricepsExtensionExerciseName;
    };
    warm_up_exercise_name: {
        [key: number]: WarmUpxerciseName;
    };
    run_exercise_name: {
        [key: number]: RunExerciseName;
    };
    water_type: {
        [key: number]: WaterType;
    };
    tissue_model_type: {
        [key: number]: TissueModelType;
    };
    dive_gas_status: {
        [key: number]: DiveGasStatus;
    };
    dive_alarm_type: {
        [key: number]: DiveAlarmType;
    };
    dive_backlight_mode: {
        [key: number]: DiveBacklightMode;
    };
    favero_product: {
        [key: number]: FaveroProduct;
    };
}
export type TypeNames = keyof Types;
export interface CoursePoint {
    message_index?: MessageIndex;
    timestamp?: Date;
    position_lat?: number;
    position_long?: number;
    distance?: number;
    type?: CoursePointType;
    name?: string;
    favorite?: boolean;
}
export interface DeveloperDataId {
    developer_id?: number;
    application_id?: number[];
    manufacturer_id?: Manufacturer;
    developer_data_index: number;
    application_version?: number;
}
export interface Device {
    timestamp: Date;
    device_index: number;
    device_type: ANTPlusDeviceType;
    manufacturer: Manufacturer;
    source_type?: SourceType;
    serial_number?: number;
    product?: number;
    software_version?: number;
    hardware_version?: number;
    cum_operating_time?: number;
    battery_voltage?: number;
    battery_status?: BatteryStatus;
    sensor_position?: BodyLocation;
    descriptor?: string;
    ant_transmission_type?: number;
    ant_device_number?: number;
    ant_network?: ANTNetwork;
    product_name?: string;
}
export interface DiveGas {
    message_index?: MessageIndex;
    helium_content?: number;
    oxygen_content?: number;
    status?: DiveGasStatus;
}
export interface FieldDescription {
    developer_data_index: number;
    field_definition_number: number;
    fit_base_type_id: number;
    field_name: string;
    units: string;
    scale?: number | null;
    offset?: number | null;
    native_field_num?: number;
}
export interface FileId {
    type?: File;
    manufacturer?: Manufacturer;
    product?: number;
    serial_number?: number;
    time_created?: Date;
    number?: number;
    product_name?: string;
}
export interface FitEvent {
    timestamp: Date;
    event: Event;
    event_type: EventType;
    data: number;
    data16?: number;
    event_group?: number;
    score?: number;
    opponent_score?: number;
    front_gear_num?: number;
    front_gear?: number;
    rear_gear_num?: number;
    rear_gear?: number;
    device_index?: number;
}
export interface HRV {
    time: number[];
}
export interface Lap {
    message_index?: MessageIndex;
    event?: string;
    event_type?: string;
    timestamp?: Date;
    start_time: Date;
    total_elapsed_time?: number;
    total_timer_time?: number;
    avg_speed?: number;
    max_speed?: number;
    total_distance?: number;
    avg_cadence?: number;
    max_cadence?: number;
    avg_power?: number;
    max_power?: number;
    time_in_power_zone?: number[];
    total_work?: number;
    min_altitude?: number;
    avg_altitude?: number;
    max_altitude?: number;
    max_neg_grade?: number;
    avg_grade?: number;
    max_pos_grade?: number;
    total_calories?: number;
    normalized_power?: number;
    avg_temperature?: number;
    max_temperature?: number;
    total_ascent?: number;
    total_descent?: number;
    sport?: string;
    sub_sport?: string;
    start_position_lat?: number;
    start_position_long?: number;
    total_cycles?: number;
    total_fat_calories?: number;
    avg_heart_rate?: number;
    max_heart_rate?: number;
    event_group?: number;
    lap_trigger?: LapTrigger;
    left_right_balance?: LeftRightBalance100;
    avg_stroke_distance?: number;
    swim_stroke?: SwimStroke;
    num_active_lengths?: number;
    gps_accuracy?: number;
    avg_pos_grade?: number;
    avg_neg_grade?: number;
    total_moving_time?: number;
    avg_pos_vertical_speed?: number;
    avg_neg_vertical_speed?: number;
    max_pos_vertical_speed?: number;
    max_neg_vertical_speed?: number;
    min_heart_rate?: number;
    time_in_hr_zone?: number[];
    time_in_speed_zone?: number[];
    time_in_cadence_zone?: number[];
    player_score?: number;
    opponent_score?: number;
    stroke_count?: number;
    zone_count?: number;
    avg_vertical_oscillation?: number;
    avg_stance_time_percent?: number;
    avg_stance_time?: number;
    avg_fractional_cadence?: number;
    max_fractional_cadence?: number;
    total_fractional_cycles?: number;
    avg_total_hemoglobin_conc?: number;
    min_total_hemoglobin_conc?: number;
    max_total_hemoglobin_conc?: number;
    avg_saturated_hemoglobin_percent?: number;
    min_saturated_hemoglobin_percent?: number;
    max_saturated_hemoglobin_percent?: number;
    avg_left_torque_effectiveness?: number;
    avg_right_torque_effectiveness?: number;
    avg_left_pedal_smoothness?: number;
    avg_right_pedal_smoothness?: number;
    avg_combined_pedal_smoothness?: number;
    time_standing?: number;
    stand_count?: number;
    avg_left_pco?: number;
    avg_right_pco?: number;
    avg_left_power_phase?: number;
    avg_left_power_phase_peak?: number;
    avg_right_power_phase?: number;
    avg_right_power_phase_peak?: number;
    avg_power_position?: number;
    max_power_position?: number;
    avg_cadence_position?: number;
    max_cadence_position?: number;
    enhanced_avg_speed?: number;
    enhanced_max_speed?: number;
    enhanced_avg_altitude?: number;
    enhanced_min_altitude?: number;
    enhanced_max_altitude?: number;
    avg_lev_motor_power?: number;
    max_lev_motor_power?: number;
    lev_battery_consumption?: number;
    avg_vertical_ratio?: number;
    avg_stance_time_balance?: number;
    avg_step_length?: number;
    avg_vam?: number;
}
export interface ExtendedLap extends Lap {
    records: any;
    lengths: any;
}
export interface Length {
    message_index?: MessageIndex;
    timestamp: Date;
    event?: FitEvent;
    event_type?: EventType;
    start_time?: Date;
    total_elapsed_time?: number;
    total_timer_time?: number;
    total_strokes?: number;
    avg_speed?: number;
    swim_stroke?: SwimStroke;
    avg_swimming_cadence?: number;
    event_group?: number;
    total_calories?: number;
    length_type?: LengthType;
    player_score?: number;
    opponent_score?: number;
    stroke_count?: number;
    zone_count?: number;
}
export interface MonitoringInfo {
    timestamp?: Date;
    local_timestamp: Date;
    activity_type?: ActivityType;
    cycles_to_distance?: number;
    cycles_to_calories?: number;
    resting_metabolic_rate?: number;
}
export interface Monitoring {
    timestamp?: Date;
    device_index?: number;
    calories?: number;
    distance?: number;
    cycles?: number;
    active_time?: number;
    activity_type?: ActivityType;
    activity_subtype?: ActivitySubtype;
    activity_level?: ActivityLevel;
    distance16?: number;
    cycles16?: number;
    active_time16?: number;
    local_timestamp?: Date;
    temperature?: number;
    temperature_min?: number;
    temperature_max?: number;
    activity_time?: number;
    active_calories?: number;
    current_activity_type_intensity?: number;
    timestamp_min8?: number;
    timestamp16?: number;
    heart_rate?: number;
    intensity?: number;
    duration_min?: number;
    duration?: number;
    ascent?: number;
    descent?: number;
    moderate_activity_minutes?: number;
    vigorous_activity_minutes?: number;
}
export interface FitRecord {
    timestamp: Date;
    speed?: number;
    distance?: number;
    cadence?: number;
    power?: number;
    altitude?: number;
    grade?: number;
    calories?: number;
    temperature?: number;
    position_lat?: number;
    position_long?: number;
    cycles?: number;
    total_cycles?: number;
    heart_rate?: number;
    gps_accuracy?: number;
    vertical_speed?: number;
    ball_speed?: number;
    vertical_oscillation?: number;
    stance_time_percent?: number;
    stance_time?: number;
    fractional_cadence?: number;
    total_hemoglobin_conc?: number;
    saturated_hemoglobin_percent?: number;
    left_torque_effectiveness?: number;
    right_torque_effectiveness?: number;
    left_pedal_smoothness?: number;
    right_pedal_smoothness?: number;
    combined_pedal_smoothness?: number;
    left_pco?: number;
    right_pco?: number;
    left_power_phase?: number;
    left_power_phase_peak?: number;
    right_power_phase?: number;
    right_power_phase_peak?: number;
    motor_power?: number;
    vertical_ratio?: number;
    stance_time_balance?: number;
    step_length?: number;
    compressed_speed_distance?: number;
    resistance?: number;
    time_from_course?: number;
    cycle_length?: number;
    speed_1s?: number;
    compressed_accumulated_power?: number;
    accumulated_power?: number;
    activity_type?: ActivityType;
    time128?: number;
    strokeType?: StrokeType;
    zone?: number;
    cadence256?: number;
    device_index?: number;
    enhanced_speed?: number;
    enhanced_altitude?: number;
    battery_soc?: number;
    absolute_pressure?: number;
    depth?: number;
    next_stop_depth?: number;
    next_stop_time?: number;
    time_to_surface?: number;
    ndl_time?: number;
    cns_load?: number;
    n2_load?: number;
}
export interface Session {
    message_index?: MessageIndex;
    laps?: Lap[];
    event?: string;
    event_type?: string;
    timestamp?: Date;
    start_time: Date;
    total_elapsed_time?: number;
    total_timer_time?: number;
    avg_speed?: number;
    max_speed?: number;
    total_distance?: number;
    avg_cadence?: number;
    max_cadence?: number;
    avg_power?: number;
    max_power?: number;
    time_in_power_zone?: number[];
    total_work?: number;
    min_altitude?: number;
    avg_altitude?: number;
    max_altitude?: number;
    max_neg_grade?: number;
    avg_grade?: number;
    max_pos_grade?: number;
    total_calories?: number;
    normalized_power?: number;
    avg_temperature?: number;
    max_temperature?: number;
    total_ascent?: number;
    total_descent?: number;
    sport?: string;
    sub_sport?: string;
    num_laps?: number;
    threshold_power?: number;
    training_stress_score?: number;
    intensity_factor?: number;
    workout_type?: number;
    start_position_lat?: number;
    start_position_long?: number;
    total_cycles?: number;
    total_fat_calories?: number;
    avg_heart_rate?: number;
    max_heart_rate?: number;
    total_training_effect?: number;
    first_lap_index?: number;
    event_group?: number;
    trigger?: SessionTrigger;
    nec_lat?: number;
    nec_long?: number;
    swc_lat?: number;
    swc_long?: number;
    left_right_balance_100?: LeftRightBalance100;
    avg_stroke_count?: number;
    avg_stroke_distance?: number;
    swim_stroke?: SwimStroke;
    pool_length?: number;
    pool_length_unit?: DisplayMeasure;
    num_active_lengths?: number;
    gps_accuracy?: number;
    avg_pos_grade?: number;
    avg_neg_grade?: number;
    total_moving_time?: number;
    avg_pos_vertical_speed?: number;
    avg_neg_vertical_speed?: number;
    max_pos_vertical_speed?: number;
    max_neg_vertical_speed?: number;
    min_heart_rate?: number;
    time_in_hr_zone?: number[];
    time_in_speed_zone?: number[];
    time_in_cadence_zone?: number[];
    avg_lap_time?: number;
    best_lap_index?: number;
    player_score?: number;
    opponent_score?: number;
    opponent_name?: string;
    stroke_count?: number;
    zone_count?: number;
    max_ball_speed?: number;
    avg_ball_speed?: number;
    avg_vertical_oscillation?: number;
    avg_stance_time_percent?: number;
    avg_stance_time?: number;
    avg_fractional_cadence?: number;
    max_fractional_cadence?: number;
    total_fractional_cycles?: number;
    avg_total_hemoglobin_conc?: number;
    min_total_hemoglobin_conc?: number;
    max_total_hemoglobin_conc?: number;
    avg_saturated_hemoglobin_percent?: number;
    min_saturated_hemoglobin_percent?: number;
    max_saturated_hemoglobin_percent?: number;
    avg_left_torque_effectiveness?: number;
    avg_right_torque_effectiveness?: number;
    avg_left_pedal_smoothness?: number;
    avg_right_pedal_smoothness?: number;
    avg_combined_pedal_smoothness?: number;
    sport_index?: number;
    time_standing?: number;
    stand_count?: number;
    avg_left_pco?: number;
    avg_right_pco?: number;
    avg_left_power_phase?: number;
    avg_left_power_phase_peak?: number;
    avg_right_power_phase?: number;
    avg_right_power_phase_peak?: number;
    avg_power_position?: number;
    max_power_position?: number;
    avg_cadence_position?: number;
    max_cadence_position?: number;
    enhanced_avg_speed?: number;
    enhanced_max_speed?: number;
    enhanced_avg_altitude?: number;
    enhanced_min_altitude?: number;
    enhanced_max_altitude?: number;
    avg_lev_motor_power?: number;
    max_lev_motor_power?: number;
    lev_battery_consumption?: number;
    avg_vertical_ratio?: number;
    avg_stance_time_balance?: number;
    avg_step_length?: number;
    total_anaerobic_effect?: number;
    avg_vam?: number;
}
export interface Sport {
    sport?: SportType;
    sub_sport?: SubSport;
    name?: string;
}
export interface StressLevel {
    stress_level_value?: number;
    stress_level_time?: Date;
    field_two?: number;
    body_battery?: number;
    field_four?: number;
}
//# sourceMappingURL=messages.d.ts.map