<?php

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YOUR_Widget_Class_Name' ) ) {
	class YOUR_Widget_Class_Name extends \Elementor\Widget_Base {
		public function get_name() {
			return 'your-widget-name';
		}

		public function get_title() {
			return 'Your Widget Title';
		}

		public function get_icon() {
			return 'eicon-code your-project-custom-widget';
		}

		public function get_categories() {
			return [ 'your-category' ];
		}

		public function get_keywords() {
			return [ 'custom', 'your-project', 'your-widget-keyword' ];
		}

		public function get_style_depends() {
			return [ YOUR_Plugin_Class_Name::STYLE_HANDLE_WIDGET ];
		}

		protected function register_controls() {
			$this->start_controls_section(
				'section_content',
				[
					'label' => 'Content',
					'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
				]
			);

			$this->add_control(
				'heading',
				[
					'label'       => 'Heading',
					'type'        => \Elementor\Controls_Manager::TEXT,
					'default'     => 'Heading',
					'label_block' => true,
				]
			);

			$this->end_controls_section();
		}

		protected function render() {
			$settings = $this->get_settings_for_display();
			$heading = isset( $settings['heading'] ) ? $settings['heading'] : '';
			?>
			<section class="your-widget">
				<h2><?php echo esc_html( $heading ); ?></h2>
			</section>
			<?php
		}
	}
}
