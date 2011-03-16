
describe 'SpiralMatrix'
  describe '.getMatrix'
    it 'should do a unary matrix'
		var result = getSpiral(1,1);
      	result.length.should.be 1
		result[0].length.should.be 1
		result[0][0].should.be 1
    end

	it 'should do a matrix 1x2'
		var result = getSpiral(1,2);
		result.length.should.be 1
		result[0].length.should.be 2
		result[0][0].should.be 1
		result[0][1].should.be 2
	end
  end
end