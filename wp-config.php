<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pizzeria' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ys6n/#AjCgBE~qTs]hRCkdX$UTa+=V},)5P2&[`.cy[ *M:&M%(9V1p;}FW!gPvc' );
define( 'SECURE_AUTH_KEY',  '9Bn31J{+D#x=~ru#:%TKd;XMAPYQK%3cjW$7y]`f3w<7fr;/C%~Av$Zg#W~I2@1V' );
define( 'LOGGED_IN_KEY',    'Ist`{(${<UxYP2kHnPK) :[+{: W86lJg[|L%hTiGr8V_z@ >ZAt(ggQ5<Ge$KQU' );
define( 'NONCE_KEY',        'UZ=z&yj`OnzeIf:]*kt^9C|XRs-u{w?k%Oc88qdDty :yL] M2Kzib]FYa.Hf]rZ' );
define( 'AUTH_SALT',        '6m9g#$#k569?F,6qE=-fRV5H>6[|4-(5`s+dKC~>R?+3nSC.[AK0tfqPzVbl,jCW' );
define( 'SECURE_AUTH_SALT', '[S -o/h=10v:UI$no8bw./(%yp)Y[]oBJ9z2Z*EoWo<hhQ&]6PGx,81U(<dNz|)R' );
define( 'LOGGED_IN_SALT',   '0}V7!hB->c0=9`UY>mFf]:[hi0upUMSuwc1%a>$)cxiP(F5]J$~6RxjB0(.ANDQj' );
define( 'NONCE_SALT',       'N: ?s+awq5<HyI G1E[X1b!(XoZl!j{!HkGiA,O_A3%mve2* k56=Ms8A+H:^_[~' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
