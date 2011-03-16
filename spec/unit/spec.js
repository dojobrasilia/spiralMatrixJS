
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

	it 'should do a matrix 1x10'
		var result = getSpiral(1,10);
		result.length.should.be 1
		result[0].length.should.be 10
		result[0][0].should.be 1
		result[0][1].should.be 2
		result[0][9].should.be 10
	end

	it 'should do a matrix 2x1'
		var result = getSpiral(2,1);
		result.length.should.be 2
		result[0].length.should.be 1
		result[0][0].should.be 1
		result[1][0].should.be 2
	end
	
	it 'should do a matrix 10x1'
		var result = getSpiral(10,1);
		result.length.should.be 10
		result[0].length.should.be 1
		result[0][0].should.be 1
		result[1][0].should.be 2
		result[9][0].should.be 10
	end
	
	it 'should do a matrix 2x2'
		var result = getSpiral(2,2);
		result.length.should.be 2
		result[0].length.should.be 2
		result[0][0].should.be 1
		result[0][1].should.be 2
		result[1][1].should.be 3
		result[1][0].should.be 4
	end
	
	
	
	
  end
end