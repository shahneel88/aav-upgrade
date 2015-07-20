var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
	$scope.product = [
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath01.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath02.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath03.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath04.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath05.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath06.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath07.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath09.jpg'
					},
					{
						'category' : 'Bath Linen',
						'image' : 'bath/bath10.jpg'
					},
					{
						'category' : 'Bed Covers',
						'image' : 'bed/bdcvr1.jpg'
					},
					{
						'category' : 'Bed Covers',
						'image' : 'bed/bdcvr2.jpg'
					},
					{
						'category' : 'Bed Covers',
						'image' : 'bed/bdcvr3.jpg'
					},
					{
						'category' : 'Bed Covers',
						'image' : 'bed/bdcvr4.jpg'
					},
					{
						'category' : 'Bed Covers',
						'image' : 'bed/bdcvr5.jpg'
					},
					{
						'category' : 'Club Class Furnishing',
						'image' : 'club/ffcas01.jpg'
					},
					{
						'category' : 'Club Class Furnishing',
						'image' : 'club/ffcas06.jpg'
					},
					{
						'category' : 'Club Class Furnishing',
						'image' : 'club/ffcas02.jpg'
					},
					{
						'category' : 'Club Class Furnishing',
						'image' : 'club/ffcas03.jpg'
					},
					{
						'category' : 'Club Class Furnishing',
						'image' : 'club/ffcas04.jpg'
					},
					{
						'category' : 'Club Class Furnishing',
						'image' : 'club/ffcas05.jpg'
					},
					{
						'category' : 'Curtains',
						'image' : 'curtains/cur1.jpg'
					},
					{
						'category' : 'Curtains',
						'image' : 'curtains/cur2.jpg'
					},
					{
						'category' : 'Curtains',
						'image' : 'curtains/cur3.jpg'
					},
					{
						'category' : 'Curtains',
						'image' : 'curtains/cur4.jpg'
					},
					{
						'category' : 'Curtains',
						'image' : 'curtains/cur5.jpg'
					},
					{
						'category' : 'Curtains',
						'image' : 'curtains/cur6.jpg'
					},
					{
						'category' : 'Mattresses',
						'image' : 'mattresses/matt01.jpg'
					},
					{
						'category' : 'Mattresses',
						'image' : 'mattresses/matt02.jpg'
					},
					{
						'category' : 'Mattresses',
						'image' : 'mattresses/matt03.jpg'
					},
					{
						'category' : 'Mattresses',
						'image' : 'mattresses/matt04.jpg'
					},
					{
						'category' : 'Mattresses',
						'image' : 'mattresses/matt05.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro01.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro02.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro03.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro04.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro05.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro06.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro07.jpg'
					},
					{
						'category' : 'Premium Range Blinds',
						'image' : 'premium/aro08.jpg'
					},
					{
						'category' : 'Quilts & Blankets',
						'image' : 'quilts/qlts1.jpg'
					},
					{
						'category' : 'Quilts & Blankets',
						'image' : 'quilts/qlts2.jpg'
					},
					{
						'category' : 'Quilts & Blankets',
						'image' : 'quilts/qlts3.jpg'
					},
					{
						'category' : 'Quilts & Blankets',
						'image' : 'quilts/qlts4.jpg'
					},
					{
						'category' : 'Quilts & Blankets',
						'image' : 'quilts/qlts5.jpg'
					},
					{
						'category' : 'Quilts & Blankets',
						'image' : 'quilts/qlts6.jpg'
					},
					{
						'category' : 'Upholstery',
						'image' : 'upholstry/uphsty1.jpg'
					},
					{
						'category' : 'Upholstery',
						'image' : 'upholstry/uphsty2.jpg'
					},
					{
						'category' : 'Upholstery',
						'image' : 'upholstry/uphsty3.jpg'
					},
					{
						'category' : 'Upholstery',
						'image' : 'upholstry/uphsty4.jpg'
					},
					{
						'category' : 'Upholstery',
						'image' : 'upholstry/uphsty5.jpg'
					},
					{
						'category' : 'Upholstery',
						'image' : 'upholstry/uphsty6.jpg'
					},
					{
						'category' : 'Wooden Flooring',
						'image' : 'wooden/wooden01.jpg'
					},
					{
						'category' : 'Wooden Flooring',
						'image' : 'wooden/wooden02.jpg'
					},
					{
						'category' : 'Wooden Flooring',
						'image' : 'wooden/wooden03.jpg'
					},
					{
						'category' : 'Wooden Flooring',
						'image' : 'wooden/wooden04.jpg'
					},
					{
						'category' : 'Wooden Flooring',
						'image' : 'wooden/wooden05.jpg'
					}
					]

});